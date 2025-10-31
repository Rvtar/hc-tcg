import {item} from '../defaults'
import {Item} from '../types'

const type = 'leader'
function capitalize(s: string) {
	return s[0].toUpperCase() + s.slice(1)
}

const LeaderItem: Item = {
	...item,
	id: 'item_' + type + '_common',
	numericId: 0.014,
	name: capitalize(type) + ' Item',
	shortName: capitalize(type),
	expansion: 'item',

	rarity: 'common',
	tokens: 0,
	type: [type],
	energy: [type],
}

export default LeaderItem
