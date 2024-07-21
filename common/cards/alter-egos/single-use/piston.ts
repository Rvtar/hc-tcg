import {GameModel} from '../../../models/game-model'
import * as query from '../../../components/query'
import {CardComponent, ObserverComponent, SlotComponent} from '../../../components'
import {applySingleUse} from '../../../utils/board'
import Card from '../../base/card'
import {SingleUse} from '../../base/types'
import {singleUse} from '../../base/defaults'
import {getFormattedName} from '../../../utils/game'

class Piston extends Card {
	firstPickCondition = query.every(
		query.slot.currentPlayer,
		query.slot.item,
		query.slot.row(query.row.hasHermit),
		query.not(query.slot.frozen),
		query.not(query.slot.empty),
		// This condition needs to be different than the one for the second pick request in this case
		// The reason is that we don't know the row that's chosen until after the first pick request is over
		query.slot.adjacent(
			query.every(
				query.slot.row(query.row.hasHermit),
				query.slot.item,
				query.slot.empty,
				query.not(query.slot.frozen)
			)
		)
	)

	props: SingleUse = {
		...singleUse,
		id: 'piston',
		numericId: 144,
		name: 'Piston',
		expansion: 'alter_egos',
		rarity: 'common',
		tokens: 0,
		description:
			'Move one of your attached item cards to an adjacent Hermit.\nYou can use another single use effect card this turn.',
		attachCondition: query.every(
			singleUse.attachCondition,
			query.exists(SlotComponent, this.firstPickCondition)
		),
		log: (values) => `${values.defaultLog} to move ${getFormattedName(values.pick.id, false)}`,
	}

	override onAttach(game: GameModel, component: CardComponent, observer: ObserverComponent) {
		const {player} = component

		let pickedItemSlot: SlotComponent | null = null

		game.addPickRequest({
			playerId: player.id,
			id: component.entity,
			message: 'Pick an item card from one of your active or AFK Hermits',
			canPick: this.firstPickCondition,
			onResult(pickResult) {
				// Store the component of the chosen item
				pickedItemSlot = pickResult
			},
		})

		game.addPickRequest({
			playerId: player.id,
			id: component.entity,
			message: 'Pick an empty item slot on one of your adjacent active or AFK Hermits',
			canPick: query.every(
				query.slot.currentPlayer,
				query.slot.item,
				query.slot.empty,
				query.slot.row(query.row.hasHermit),
				query.not(query.slot.frozen),
				query.slot.adjacent((game, pos) => query.slot.entity(pickedItemSlot?.entity)(game, pos))
			),
			onResult(pickedSlot) {
				// Move the card and apply su card
				game.swapSlots(pickedItemSlot, pickedSlot)
				applySingleUse(game, pickedSlot)
			},
		})

		observer.subscribe(player.hooks.afterApply, () => {
			component.discard()
			// Remove playing a single use from completed actions so it can be done again
			game.removeCompletedActions('PLAY_SINGLE_USE_CARD')
			player.singleUseCardUsed = false
			observer.unsubscribe(player.hooks.afterApply)
		})
	}
}

export default Piston
