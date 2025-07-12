import {CARDS} from '../..'
import {CardComponent, ObserverComponent} from '../../../components'
import {GameModel} from '../../../models/game-model'
import {attach} from '../../defaults'
import {Attach, Hermit} from '../../types'
import {TypeT} from '../../../types/cards'

const CorruptionBed: Attach = {
	...attach,
	id: 'corruption_bed',
	numericId: 1792,
	expansion: 'beds',
	name: 'Corruption bed',
	rarity: 'ultra_rare',
	tokens: 2,
	description:
		'If the hermit this bed is attached to has items of its rare variant attached, convert it into the rare version.',
	onAttach(
		game: GameModel,
		component: CardComponent,
		observer: ObserverComponent,
	) {
		const {player} = component

		const tryUpgrade = () => {
			if (!component.slot.inRow()) return
			const hermit = component.slot.row.hermitSlot.card
			if (!hermit) return
			if (hermit.props.rarity !== 'common') return
			const new_id = hermit.props.id.replace('common', 'rare')
			const new_card = CARDS[new_id]
			if (!new_card) return
			const items = component.slot.row.getItems()
			let itemTypes: Array<any> = []
			for (let i = 0; i < items.length; i++) {
				let item = items[i]
				if (item.isItem()) {
					if (item.props.type) {
						itemTypes.concat(item.props.type)
					} else {
						itemTypes.push(null)
					}
				}
			}
			if (!(new_card as Hermit).type) {
				if (!itemTypes.includes(null)) return
			}
			if (itemTypes.filter(type => (new_card as Hermit).type?.includes(type)))
			game.components.new(
				CardComponent,
				new_card,
				component.slot.row.hermitSlot.entity,
			)
			game.components.delete(hermit.entity)
		}
		tryUpgrade()

		observer.subscribe(player.hooks.onAttach, (card) => {
			if (card.props.category !== 'item') return
			tryUpgrade()
		})
	},
}

export default CorruptionBed
