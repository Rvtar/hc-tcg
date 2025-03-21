import {describe, expect, test} from '@jest/globals'
import BuilderItem from 'common/cards/items/builder-common'
import BuilderDoubleItem from 'common/cards/items/builder-rare'
import JackRare from 'common/cards/shifttech/hermits/jack-rare'
import {attack, endTurn, playCardFromHand, testGame} from '../../utils'

describe('Test Jack Rare', () => {
	test('Test Jack Rare Base Functionality', () => {
		testGame(
			{
				playerOneDeck: [JackRare],
				playerTwoDeck: [JackRare, BuilderItem, BuilderItem],
				saga: function* (game) {
					yield* playCardFromHand(game, JackRare, 'hermit', 0)
					yield* endTurn(game)

					yield* playCardFromHand(game, JackRare, 'hermit', 0)
					yield* playCardFromHand(game, BuilderItem, 'item', 0, 0)
					yield* attack(game, 'secondary')
					yield* playCardFromHand(game, BuilderItem, 'item', 0, 1)
				},
			},
			{startWithAllCards: true, noItemRequirements: true, forceCoinFlip: true},
		)
	})
	test('Test Jack Rare Double Item First Condition', () => {
		testGame(
			{
				playerOneDeck: [JackRare],
				playerTwoDeck: [JackRare, BuilderDoubleItem],
				saga: function* (game) {
					yield* playCardFromHand(game, JackRare, 'hermit', 0)
					yield* endTurn(game)

					yield* playCardFromHand(game, JackRare, 'hermit', 0)
					yield* playCardFromHand(game, BuilderDoubleItem, 'item', 0, 0)
					yield* attack(game, 'secondary')
					expect(game.state.turn.availableActions).not.toContain(
						'PLAY_ITEM_CARD',
					)
				},
			},
			{startWithAllCards: true, noItemRequirements: true, forceCoinFlip: true},
		)
	})
	test('Test Jack Rare Double Item Second Condition', () => {
		testGame(
			{
				playerOneDeck: [JackRare],
				playerTwoDeck: [JackRare, BuilderDoubleItem],
				saga: function* (game) {
					yield* playCardFromHand(game, JackRare, 'hermit', 0)
					yield* endTurn(game)

					yield* playCardFromHand(game, JackRare, 'hermit', 0)
					yield* attack(game, 'secondary')
					expect(game.currentPlayer.getCardsCanBePlacedIn()).toStrictEqual([])
					expect(
						playCardFromHand(game, BuilderDoubleItem, 'item', 0, 0),
					).toThrow('You cannot play cards that are in frozen slots')
				},
			},
			{startWithAllCards: true, noItemRequirements: true, forceCoinFlip: true},
		)
	})
})
