import {
	CardComponent,
	ObserverComponent,
	SlotComponent,
} from '../../../components'
import query from '../../../components/query'
import {GameModel} from '../../../models/game-model'
import {applySingleUse} from '../../../utils/board'
import Card from '../../base/card'
import {hermit} from '../../base/defaults'
import {Hermit} from '../../base/types'

class Cubfan135Rare extends Card {
	props: Hermit = {
		...hermit,
		id: 'cubfan135_rare',
		numericId: 10,
		name: 'Cub',
		expansion: 'default',
		rarity: 'rare',
		tokens: 1,
		type: 'speedrunner',
		health: 260,
		primary: {
			name: 'Dash',
			cost: ['any'],
			damage: 40,
			power: null,
		},
		secondary: {
			name: "Let's Go",
			cost: ['speedrunner', 'speedrunner', 'speedrunner'],
			damage: 100,
			power: 'After attack, you can choose to go AFK.',
		},
	}

	override onAttach(
		game: GameModel,
		component: CardComponent,
		observer: ObserverComponent,
	) {
		const {player} = component

		observer.subscribe(player.hooks.afterAttack, (attack) => {
			if (!attack.isAttacker(component.entity) || attack.type !== 'secondary')
				return

			if (
				!game.components.exists(
					SlotComponent,
					query.slot.currentPlayer,
					query.slot.hermit,
					query.not(query.slot.active),
					query.not(query.slot.empty),
				)
			)
				return

			game.addPickRequest({
				player: player.entity,
				id: component.entity,
				message: 'Pick one of your Hermits to become the new active Hermit',
				canPick: query.every(
					query.slot.currentPlayer,
					query.slot.hermit,
					query.not(query.slot.empty),
				),
				onResult(pickedSlot) {
					if (!pickedSlot.inRow()) return
					if (pickedSlot.row.entity !== player.activeRowEntity) {
						player.changeActiveRow(pickedSlot.row)
						applySingleUse(game, component.slot)
					}
				},
			})
		})
	}
}

export default Cubfan135Rare
