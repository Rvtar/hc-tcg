import {TypeT} from '../../common/types/cards'

type StrengthsDict = {
	readonly [Type in TypeT]: Array<TypeT>
}

export const STRENGTHS: StrengthsDict = {
	any: [],
	artist: ['historian', 'miner', 'speedrunner'],
	balanced: [],
	bdubs: ['bdubs', 'spy', 'redstone'],
	builder: ['looper', 'scavenger', 'terraform'],
	challenger: ['looper', 'pacifist', 'terraform'],
	explorer: ['builder', 'mobber', 'spy'],
	farm: ['explorer', 'historian', 'mobber'],
	hellspawn: ['farm', 'merchant', 'pacifist'],
	historian: ['artist', 'scavenger', 'spy'],
	leader: ['challenger', 'explorer', 'hellspawn'],
	looper: ['bdubs', 'hellspawn', 'pvp'],
	merchant: ['explorer', 'leader', 'merchant'],
	miner: ['challenger', 'prankster', 'redstone'],
	mobber: ['artist', 'pacifist', 'terraform'],
	pacifist: ['leader', 'merchant', 'pvp'],
	prankster: ['artist', 'builder', 'historian'],
	pvp: ['farm', 'hellspawn', 'speedrunner'],
	redstone: ['bdubs', 'challenger', 'pvp'],
	scavenger: ['miner', 'prankster', 'speedrunner'],
	speedrunner: ['leader', 'miner', 'prankster'],
	spy: ['builder', 'farm', 'looper'],
	terraform: ['mobber', 'redstone', 'scavenger'],
}
