import {
	CardComponent,
	ObserverComponent,
	SlotComponent,
} from '../../../components'
import query from '../../../components/query'
import {GameModel} from '../../../models/game-model'
import {beforeAttack} from '../../../types/priorities'
import {hermit} from '../../defaults'
import {Hermit} from '../../types'

const pickCondition = query.every(
	query.not(query.slot.active),
	query.not(query.slot.empty),
	query.slot.hermit,
)

const scarIds = [39, 40, 220, 253, 418, 585, 614, 813, 1019, 1402, 1403, 1421, 1422, 1423] //@SUBSTITUTE Subbed cards for ids.

const JellieRare: Hermit = {
	...hermit,
	id: 'jellie_rare',
	numericId: 134,
	name: 'Jellie',
	expansion: 'hc_plus',
	rarity: 'rare',
	tokens: 0,
	type: ['prankster'],
	health: 270,
	primary: {
		name: 'Queen Jellie',
		cost: ['prankster'],
		damage: 60,
		power: null,
	},
	secondary: {
		name: 'Comfort',
		cost: ['prankster', 'prankster'],
		damage: 0,
		power: 'Heal an AFK Hermit for 100 HP.\nHeal Scar cards an extra 50 HP.',
	},
	onAttach(
		game: GameModel,
		component: CardComponent,
		observer: ObserverComponent,
	) {
		const { player } = component

		let pickedAfkSlot: SlotComponent | null = null

		// Pick the hermit to heal
		observer.subscribe(
			player.hooks.getAttackRequests,
			(activeInstance, hermitAttackType) => {
				// Make sure we are attacking
				if (activeInstance.entity !== component.entity) return

				// Only secondary attack
				if (hermitAttackType !== 'secondary') return

				// Make sure there is something to select
				if (!game.components.exists(SlotComponent, pickCondition)) return

				game.addPickRequest({
					player: player.entity,
					id: component.entity,
					message: 'Pick an AFK Hermit from either side of the board',
					canPick: pickCondition,
					onResult(pickedSlot) {
						// Store the info to use later
						pickedAfkSlot = pickedSlot
					},
					onTimeout() {
						// We didn't pick anyone to heal, so heal no one
					},
				})
			},
		)

		// Heals the afk hermit *before* we actually do damage
		observer.subscribeWithPriority(
			game.hooks.beforeAttack,
			beforeAttack.HERMIT_APPLY_ATTACK,
			(attack) => {
				if (!attack.isAttacker(component.entity) || attack.type !== 'secondary')
					return

				if (!pickedAfkSlot?.inRow()) return
				if (!pickedAfkSlot.card) return

				let heal = 100
				if (scarIds.includes(pickedAfkSlot.card.props.numericId)) {
					heal += 50
				}

				pickedAfkSlot.row.heal(heal)
				let hermit = pickedAfkSlot.row.getHermit()

				game.battleLog.addEntry(
					player.entity,
					`$p${hermit?.props.name} (${pickedAfkSlot.row.index + 1})$ was healed $g${heal}hp$ by $p${
						hermit?.props.name
					}$`,
				)
			},
		)
	},
}

export default JellieRare
