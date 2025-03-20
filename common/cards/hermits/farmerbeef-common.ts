import {hermit} from '../defaults'
import {Hermit} from '../types'

const FarmerBeefCommon: Hermit = {
	...hermit,
	id: 'farmerbeef_common',
	numericId: 25,
	name: 'Farmer Beef',
	expansion: 'alter_egos',
	background: 'alter_egos',
	palette: 'alter_egos',
	set: ['AE3'],
	update: 0,
	rarity: 'common',
	tokens: 1,
	type: ['balanced'],
	health: 280,
	primary: {
		name: 'Crop',
		cost: ['balanced'],
		damage: 50,
		power: null,
	},
	secondary: {
		name: 'Big salmon',
		cost: ['balanced', 'balanced', 'balanced'],
		damage: 100,
		power: null,
	},
}

export default FarmerBeefCommon
