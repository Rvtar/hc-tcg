import {item} from '../defaults'
import {Item} from '../types'

const WildItem: Item = {
	...item,
	id: 'item_any_common',
	numericId: 0.100,
	name: 'Wild Item',
	description:
		'Counts as any single Item card.\nThe first 3 wild cards in your deck cost 0 tokens.',
	shortName: 'Wild',
	expansion: 'alter_egos',
	rarity: 'common',
	tokens: 'wild',
	type: ['any'],
	energy: ['any'],
}

export default WildItem
