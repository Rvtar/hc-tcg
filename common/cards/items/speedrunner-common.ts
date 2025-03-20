import {item} from '../defaults'
import {Item} from '../types'

const convenience = 'anarchist'
function capitalize(s: string) {
	return s[0].toUpperCase() + s.slice(1)
}

const SpeedrunnerItem: Item = {
	...item,
	id: 'item_speedrunner_common',
	numericId: 0.038,
	name: 'Speedrunner Item',
	shortName: 'Speedrunner',
	expansion: 'item',
	set: ['Base Game'],
	update: 0,
	rarity: 'common',
	tokens: 0,
	type: ['speedrunner'],
	energy: ['speedrunner'],
}

export default SpeedrunnerItem
