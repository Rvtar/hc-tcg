import {Card, isItem} from '../cards/types'
import {RankT, TokenCostT} from '../types/cards'

export function getCardVisualTokenCost(tokens: TokenCostT): number {
	if (tokens === 'wild') return 1
	if (tokens === 'etho-ur') return 3
	if (tokens < 0) return 0
	return tokens
}

export function getCardRank(tokens: TokenCostT): RankT {
	let displayCost = getCardVisualTokenCost(tokens)
	if (displayCost === 0) {
		return 'stone'
	} else if (displayCost === 1) {
		return 'iron'
	} else if (displayCost === 2) {
		return 'gold'
	} else if (displayCost === 3) {
		return 'emerald'
	} else if (displayCost === 4) {
		return 'diamond'
	} else if (displayCost === 5) {
		return 'netherite'
	} else if (displayCost >= 6) {
		return 'obsidian'
	}
	return 'stone'
}

export function getDeckCost(deckCards: Array<Card>) {
	let wildCards = deckCards.filter(
		(card) => card.id === 'item_any_common',
	).length
	let wildCost = Math.max(wildCards - 3, 0)

	let ethoURCards = deckCards.filter(
		(card) => card.id === 'ethoslab_ultra_rare',
	).length
	let nonPvPItems = deckCards.filter(
		(card) =>
			isItem(card) && !card.type.includes('pvp') && !card.type.includes('any'),
	).length
	let ethoURCost = (nonPvPItems > 0 ? 3 : 2) * ethoURCards

	return (
		deckCards.reduce(
			(cost, card) =>
				(cost += typeof card.tokens !== 'number' ? 0 : card.tokens),
			0,
		) +
		wildCost +
		ethoURCost
	)
}
