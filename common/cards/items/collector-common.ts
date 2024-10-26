import {item} from '../base/defaults'
import {Item} from '../base/types'

const convenience = 'collector'
function capitalize(s: string) {
	return s[0].toUpperCase() + s.slice(1)
}

const CollectorItem: Item = {
	...item,
	id: 'item_' + convenience + '_common',
	numericId: 49,
	name: capitalize(convenience) + ' Item',
	shortName: capitalize(convenience),
	expansion: 'default',
	rarity: 'common',
	tokens: 0,
	type: convenience,
	energy: [convenience],
}

export default CollectorItem