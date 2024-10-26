import {item} from '../base/defaults'
import {Item} from '../base/types'

const convenience = 'pacifist'
function capitalize(s: string) {
	return s[0].toUpperCase() + s.slice(1)
}

const PacifistDoubleItem: Item = {
	...item,
	id: 'item_' + convenience + '_rare',
	numericId: 49,
	name: capitalize(convenience) + ' Item �2',
	shortName: capitalize(convenience),
	description: 'Counts as 2 ' + capitalize(convenience) + ' Item cards.',
	expansion: 'default',
	rarity: 'rare',
	tokens: 2,
	type: convenience,
	energy: [convenience, convenience],
}

export default PacifistDoubleItem
