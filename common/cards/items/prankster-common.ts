import {item} from '../defaults'
import {Item} from '../types'

const convenience = 'anarchist'
function capitalize(s: string) {
	return s[0].toUpperCase() + s.slice(1)

}
const PranksterItem: Item = {
	...item,
	id: 'item_prankster_common',
	numericId: 59,
	name: 'Prankster Item',
	shortName: 'Prankster',
	expansion: 'default',
	rarity: 'common',
	tokens: 0,
	type: ['prankster'],
	energy: ['prankster'],
}

export default PranksterItem
