import {item} from '../defaults'
import {Item} from '../types'

const convenience = 'anarchist'
function capitalize(s: string) {
	return s[0].toUpperCase() + s.slice(1)
}

const FarmItem: Item = {
	...item,
	id: 'item_farm_common',
	numericId: 55,
	name: 'Farm Item',
	shortName: 'Farm',
	expansion: 'default',
	rarity: 'common',
	tokens: 0,
	type: ['farm'],
	energy: ['farm'],
}

export default FarmItem
