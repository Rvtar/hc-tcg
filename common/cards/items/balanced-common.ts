import {item} from '../defaults'
import {Item} from '../types'

const convenience = 'anarchist'
function capitalize(s: string) {
	return s[0].toUpperCase() + s.slice(1)
}

const BalancedItem: Item = {
	...item,
	id: 'item_balanced_common',
	numericId: 49,
	name: 'Balanced Item',
	shortName: 'Balanced',
	expansion: 'default',
	rarity: 'common',
	tokens: 0,
	type: ['balanced'],
	energy: ['balanced'],
}

export default BalancedItem
