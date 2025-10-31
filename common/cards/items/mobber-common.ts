import {item} from '../defaults'
import {Item} from '../types'

const type = 'mobber'
function capitalize(s: string) {
	return s[0].toUpperCase() + s.slice(1)
}

const MobberItem: Item = {
	...item,
	id: 'item_' + type + '_common',
	numericId: 0.042,
	name: capitalize(type) + ' Item',
	shortName: capitalize(type),
	expansion: 'item',

	rarity: 'common',
	tokens: 0,
	type: [type],
	energy: [type],
}

export default MobberItem
