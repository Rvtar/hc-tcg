import {item} from '../defaults'
import {Item} from '../types'

const convenience = 'inventor'
function capitalize(s: string) {
	return s[0].toUpperCase() + s.slice(1)
}

const InventorDoubleItem: Item = {
	...item,
	id: 'item_' + convenience + '_rare',
	numericId: 0.023,
	name: capitalize(convenience) + ' Item x2',
	shortName: capitalize(convenience),
	description: 'Counts as 2 ' + capitalize(convenience) + ' Item cards.',
	expansion: 'default',
	rarity: 'rare',
	tokens: 2,
	type: [convenience],
	energy: [convenience, convenience],
}

export default InventorDoubleItem