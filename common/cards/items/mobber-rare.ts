import {item} from '../defaults'
import {Item} from '../types'

const type = 'mobber'
function capitalize(s: string) {
	return s[0].toUpperCase() + s.slice(1)
}

const MobberDoubleItem: Item = {
	...item,
	id: 'item_' + type + '_rare',
	numericId: 0.043,
	name: capitalize(type) + ' Item x2',
	shortName: capitalize(type),
	description: 'Counts as 2 ' + capitalize(type) + ' Item cards.',
	expansion: 'item',

	rarity: 'rare',
	tokens: 2,
	type: [type],
	energy: [type, type],
}

export default MobberDoubleItem
