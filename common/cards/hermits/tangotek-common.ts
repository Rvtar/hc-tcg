import {hermit} from '../defaults'
import {Hermit} from '../types'

const TangoTekCommon: Hermit = {
	...hermit,
	id: 'tangotek_common',
	numericId: 43,
	name: 'Tango',
	expansion: 'default',
	set: ['Base Game'],
	update: 0,
	rarity: 'common',
	tokens: 0,
	type: ['redstone'],
	health: 300,
	primary: {
		name: 'Thing-ificator',
		cost: ['redstone'],
		damage: 60,
		power: null,
	},
	secondary: {
		name: 'Hat Trick',
		cost: ['redstone', 'any'],
		damage: 70,
		power: null,
	},
}

export default TangoTekCommon
