import {CARDS_LIST} from '../cards'
import {Card} from '../cards/types'
import {Goal} from '../types/achievements'
import {achievement} from './defaults'
import {Achievement} from './types'

const update0Cards = CARDS_LIST.filter(
	(card) => card.numericId >= 0 && card.numericId <= 196,
)
update0Cards.sort((cardA, cardB) => cardA.numericId - cardB.numericId)

const AllCards: Achievement = {
	...achievement,
	id: 'all_cards',
	numericId: 0,
	progressionMethod: 'sum',
	levels: [
		{
			name: 'Jack of All Cards',
			description: 'Win a game using every card from update 0.',
			steps: update0Cards.length,
		},
	],
	getProgress(goals) {
		return Object.values(goals).filter((goal) => goal > 0).length
	},
	getGoals(goals) {
		const outputGoals: Array<Goal> = []
		CARDS_LIST.forEach((card) => {
			if (card.numericId > 196) return

			const getRarity = () => {
				if (card.category !== 'hermit') return ''
				if (card.rarity === 'common') return '(Common)'
				if (card.rarity === 'rare') return '(Rare)'
				if (card.rarity === 'ultra_rare') return '(Ultra Rare)'
				if (card.rarity === 'mythic') return '(Mythic)'
			}

			const rarity = getRarity()

			outputGoals.push({
				name: `${card.name} ${rarity}`,
				complete: goals[card.numericId] > 0,
			})
		})
		return outputGoals
	},
	onGameStart(game, player, component, observer) {
		const playedCards: Set<Card['numericId']> = new Set()

		observer.subscribe(player.hooks.onAttach, (card) => {
			if (card.props.numericId > 196) return
			playedCards.add(card.props.numericId)
		})

		observer.subscribe(game.hooks.onGameEnd, (outcome) => {
			if (outcome.type !== 'player-won' || outcome.winner !== player.entity)
				return
			for (const card of playedCards.values()) {
				component.updateGoalProgress({goal: card, progress: 1})
			}
		})
	},
}

export default AllCards
