import {hermit} from '../defaults'
import {Hermit} from '../types'

const DreamRare: Hermit = {
	...hermit,
	id: 'dream_rare',
	numericId: 227,
	name: 'Dream',
	expansion: 'mcyt',
	set: [],
	update: 0,
	rarity: 'rare',
	tokens: 2,
	type: ['speedrunner'],
	health: 290,
	primary: {
		name: "C'mere",
		cost: ['speedrunner'],
		damage: 50,
		power: null,
	},
	secondary: {
		name: 'Transition',
		cost: ['speedrunner', 'speedrunner', 'any'],
		damage: 90,
		power: 'Flip a Coin.\nIf heads, HP is set randomly between 10-290.',
	},
}

export default DreamRare
