import {hermit} from '../defaults'
import {Hermit} from '../types'

const PearlescentMoonCommon: Hermit = {
	...hermit,
	id: 'pearlescentmoon_common',
	numericId: 35,
	name: 'Pearl',
	expansion: 'default',
	set: ['Base Game'],
	update: 0,
	rarity: 'common',
	tokens: 0,
	type: ['builder'],
	health: 270,
	primary: {
		name: '5 AM',
		cost: ['any'],
		damage: 40,
		power: null,
	},
	secondary: {
		name: "What's This?",
		cost: ['builder', 'builder', 'any'],
		damage: 90,
		power: null,
	},
}

export default PearlescentMoonCommon
