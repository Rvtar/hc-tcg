import {hermit} from '../defaults'
import {Hermit} from '../types'

const KeralisCommon: Hermit = {
	...hermit,
	id: 'keralis_common',
	numericId: 31,
	name: 'Keralis',
	expansion: 'default',
	set: ['Base Game'],
	update: 0,
	rarity: 'common',
	tokens: 0,
	type: ['builder'],
	health: 270,
	primary: {
		name: 'Looky Looky',
		cost: ['any'],
		damage: 40,
		power: null,
	},
	secondary: {
		name: 'NoNoNoNo',
		cost: ['builder', 'builder', 'any'],
		damage: 90,
		power: null,
	},
}

export default KeralisCommon
