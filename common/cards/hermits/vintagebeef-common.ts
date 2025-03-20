import {hermit} from '../defaults'
import {Hermit} from '../types'

const VintageBeefCommon: Hermit = {
	...hermit,
	id: 'vintagebeef_common',
	numericId: 3,
	name: 'Beef',
	expansion: 'default',
	set: ['Base Game'],
	update: 0,
	rarity: 'common',
	tokens: 0,
	type: ['balanced'],
	health: 250,
	primary: {
		name: 'Hey Guys!',
		cost: ['any'],
		damage: 30,
		power: null,
	},
	secondary: {
		name: 'Mindcrack',
		cost: ['balanced', 'balanced'],
		damage: 80,
		power: null,
	},
}

export default VintageBeefCommon
