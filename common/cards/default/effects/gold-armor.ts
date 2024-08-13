import {CardComponent, ObserverComponent} from '../../../components'
import {GameModel} from '../../../models/game-model'
import {attach} from '../../base/defaults'
import {Attach} from '../../base/types'

const GoldArmor: Attach = {
	...attach,
	id: 'gold_armor',
	numericId: 29,
	name: 'Gold Armour',
	expansion: 'default',
	rarity: 'common',
	tokens: 0,
	description:
		'When the Hermit this card is attached to takes damage, that damage is reduced by up to 10hp each turn.',
	onAttach(
		_game: GameModel,
		component: CardComponent,
		observer: ObserverComponent,
	) {
		const {player, opponentPlayer} = component

		let damageBlocked = 0

		observer.subscribe(player.hooks.onDefence, (attack) => {
			if (!attack.isTargeting(component) || attack.isType('status-effect'))
				return

			if (damageBlocked < 10) {
				const damageReduction = Math.min(
					attack.calculateDamage(),
					10 - damageBlocked,
				)
				damageBlocked += damageReduction
				attack.reduceDamage(component.entity, damageReduction)
			}
		})

		const resetCounter = () => {
			damageBlocked = 0
		}

		// Reset counter at the start of every turn
		observer.subscribe(player.hooks.onTurnStart, resetCounter)
		observer.subscribe(opponentPlayer.hooks.onTurnStart, resetCounter)
	},
}

export default GoldArmor
