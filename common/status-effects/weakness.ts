import {
	CardComponent,
	ObserverComponent,
	StatusEffectComponent,
} from '../components'
import {GameModel} from '../models/game-model'
import {beforeAttack} from '../types/priorities'
import {Counter, statusEffect} from './status-effect'

const WeaknessEffect: Counter<CardComponent> = {
	...statusEffect,
	id: 'weakness',
	icon: 'weakness',
	name: 'Weakness',
	description: "This Hermit is weak to the opponent's active Hermit's type.",
	counter: 3,
	counterType: 'turns',
	onApply(
		game: GameModel,
		effect: StatusEffectComponent,
		target: CardComponent,
		observer: ObserverComponent,
	) {
		const {player} = target

		observer.subscribe(player.hooks.onTurnStart, () => {
			if (!effect.counter) return
			effect.counter--

			if (effect.counter === 0) effect.remove()
		})

		observer.subscribeWithPriority(
			game.hooks.beforeAttack,
			beforeAttack.FORCE_WEAKNESS_ATTACK,
			(attack) => {
				if (!target.slot.inRow()) return
				if (
					attack.targetEntity !== target.slot.rowEntity ||
					attack.createWeakness === 'never'
				)
					return
				attack.createWeakness = 'always'
			},
		)
	},
}

export default WeaknessEffect
