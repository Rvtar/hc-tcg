import {hermit} from '../defaults'
import {Hermit} from '../types'

const ImpulseSVCommon: Hermit = {
	...hermit,
	id: 'impulsesv_common',
	numericId: 23,
	name: 'Impulse',
	expansion: 'default',
	set: ['Base Game'],
	update: 0,
	rarity: 'common',
	tokens: 0,
	type: ['farm'],
	health: 270,
	primary: {
		name: 'Shovel Shuffle',
		cost: ['any'],
		damage: 30,
		power: null,
	},
	secondary: {
		name: 'iAttack',
		cost: ['farm', 'any'],
		damage: 70,
		power: null,
	},
}

export default ImpulseSVCommon
