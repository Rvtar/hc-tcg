import {hermit} from '../../base/defaults'
import {Hermit} from '../../base/types'

const ShadEECommon: Hermit = {
	...hermit,
	id: 'shadee_common',
	numericId: 237,
	name: 'Shade-E-E',
	expansion: 'alter_egos',
	background: 'alter_egos',
	palette: 'alter_egos',
	rarity: 'common',
	tokens: 0,
	type: 'prankster',
	health: 280,
	primary: {
		name: 'Free Glass',
		cost: ['any'],
		damage: 30,
		power: null,
	},
	secondary: {
		name: 'Tickle',
		cost: ['prankster', 'prankster', 'any'],
		damage: 90,
		power: null,
	},
}

export default ShadEECommon
