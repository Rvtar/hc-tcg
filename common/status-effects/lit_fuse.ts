import MinecartWithTNT from '../cards/advent-of-tcg/single-use/tnt-minecart'
import TNT from '../cards/single-use/tnt'
import {
	CardComponent,
	ObserverComponent,
	StatusEffectComponent,
} from '../components'
import {GameModel} from '../models/game-model'
import {onTurnEnd} from '../types/priorities'
import {Counter, systemStatusEffect} from './status-effect'

const LitFuseEffect: Counter<CardComponent> = {
	...systemStatusEffect,
	id: 'lit_fuse',
	icon: 'tnt',
	name: 'Lit fuse',
	description:
		'When the counter reaches 0, any TNT or TNT minecarts in your hand will deal 60hp damage to this hermit.',
	counter: 4,
	counterType: 'turns',
	onApply(
		game: GameModel,
		effect: StatusEffectComponent<CardComponent>,
		target: CardComponent,
		observer: ObserverComponent,
	) {
		const {player} = target

		observer.subscribe(player.hooks.onTurnStart, () => {
			if (effect.counter === null) return
			effect.counter -= 1
			if (effect.counter === 0) {
				let damage = 0
				target.player.getHand().forEach((card) => {
					if (![TNT.id, MinecartWithTNT.id].includes(card.props.id)) return
					effect.remove()
					card.discard()
					damage += 60
				})
				if (!target.slot.inRow()) return
				const hermit = target.slot.row.getHermit()
				if (damage === 0 || !hermit) {
					target.discard()
					return
				}
				target.slot.row.damage(damage)
				game.battleLog.addEntry(
					player.entity,
					`$p${hermit.props.name}$'s $e${target.props.name}$ detonated, dealing $g${damage}hp$ damage.`,
				)
				effect.remove()
				target.discard()
			}
		})
	},
}

export default LitFuseEffect
