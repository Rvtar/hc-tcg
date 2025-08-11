import {hermit} from '../defaults'
import {Hermit} from '../types'

const InterimNameCommon: Hermit = {
	...hermit,
	id: 'interimname_common',
	numericId: 131,
	name: 'InterimName',
	expansion: 'shifttech',
	rarity: 'common',
	tokens: 0,
	type: ['redstone'],
	health: 290,
	primary: {
		name: 'Due South',
		cost: ['redstone'],
		damage: 60,
		power: null,
	},
	secondary: {
		name: 'Door to Nothing',
		cost: ['redstone', 'redstone'],
		damage: 80,
		power: null,
	},
}

export default InterimNameCommon
