import {achievement} from './defaults'
import {Achievement} from './types'

const DefeatEvilX: Achievement = {
	...achievement,
	numericId: 6,
	id: 'defeat_evil_x',
	progressInBossGame: true,
	levels: [
		{
			name: 'Evil X-Terminator',
			description: 'Defeat Evil X',
			steps: 1,
		},
	],
	onGameEnd(game, player, component, outcome) {
		if (!game.state.isEvilXBossGame) return
		if (outcome.type !== 'player-won') return
		if (outcome.winner !== player.entity) return
		component.incrementGoalProgress({goal: 0})
	},
}

export default DefeatEvilX
