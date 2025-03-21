import {hermit} from '../defaults'
import {Hermit} from '../types'

const SteampunkTangoCommon: Hermit = {
	...hermit,
	id: 'steampunktango_common',
	numericId: 812,
	name: 'Steampunk Tango',
	shortName: 'S. Tango',
	expansion: 'alter_egos',
	background: 'alter_egos',
	palette: 'alter_egos',
	set: ['AE2'],
	update: 0,
	rarity: 'common',
	tokens: 0,
	type: ['speedrunner'],
	health: 250,
	primary: {
		name: 'Create',
		cost: ['speedrunner'],
		damage: 60,
		power: null,
	},
	secondary: {
		name: 'Automate',
		cost: ['speedrunner', 'any'],
		damage: 70,
		power: null,
	},
}

export default SteampunkTangoCommon
