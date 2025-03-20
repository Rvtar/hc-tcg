import {hermit} from '../defaults'
import {Hermit} from '../types'

const WormManCommon: Hermit = {
	...hermit,
	id: 'wormman_common',
	numericId: 409,
	name: 'Worm Man',
	expansion: 'alter_egos',
	background: 'alter_egos',
	palette: 'alter_egos',
	set: ['AE2'],
	update: 0,
	rarity: 'common',
	tokens: 0,
	type: ['terraform'],
	health: 290,
	primary: {
		name: 'Justice!',
		cost: ['terraform'],
		damage: 60,
		power: null,
	},
	secondary: {
		name: 'Away!',
		cost: ['terraform', 'terraform', 'any'],
		damage: 90,
		power: null,
	},
}

export default WormManCommon
