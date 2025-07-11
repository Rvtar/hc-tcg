import {describe, expect, test} from '@jest/globals'
import BuilderItem from 'common/cards/items/builder-common'
import BuilderDoubleItem from 'common/cards/items/builder-rare'
import JackRare from 'common/cards/shifttech/hermits/jack-rare'
import {testGame} from '../../utils'

describe('Test Jack Rare', () => {
	test('Test Jack Rare Base Functionality', async () => {
		await testGame(
			{
				playerOneDeck: [JackRare],
				playerTwoDeck: [JackRare, BuilderItem, BuilderItem],
				testGame: async (test, game) => {
					await test.playCardFromHand(JackRare, 'hermit', 0)
					await test.endTurn()

					await test.playCardFromHand(JackRare, 'hermit', 0)
					await test.playCardFromHand(BuilderItem, 'item', 0, 0)
					await test.attack('secondary')
					await test.playCardFromHand(BuilderItem, 'item', 0, 1)
				},
			},
			{startWithAllCards: true, noItemRequirements: true, forceCoinFlip: true},
		)
	})
	test('Test Jack Rare Double Item First Condition', async () => {
		await testGame(
			{
				playerOneDeck: [JackRare],
				playerTwoDeck: [JackRare, BuilderDoubleItem],
				testGame: async (test, game) => {
					await test.playCardFromHand(JackRare, 'hermit', 0)
					await test.endTurn()

					await test.playCardFromHand(JackRare, 'hermit', 0)
					await test.playCardFromHand(BuilderDoubleItem, 'item', 0, 0)
					await test.attack('secondary')
					expect(game.state.turn.availableActions).not.toContain(
						'PLAY_ITEM_CARD',
					)
				},
			},
			{startWithAllCards: true, noItemRequirements: true, forceCoinFlip: true},
		)
	})
	test('Test Jack Rare Double Item Second Condition', async () => {
		await testGame(
			{
				playerOneDeck: [JackRare],
				playerTwoDeck: [JackRare, BuilderDoubleItem],
				testGame: async (test, game) => {
					await test.playCardFromHand(JackRare, 'hermit', 0)
					await test.endTurn()

					await test.playCardFromHand(JackRare, 'hermit', 0)
					await test.attack('secondary')
					expect(game.currentPlayer.getCardsCanBePlacedIn()).toStrictEqual([])
					expect(
						test.playCardFromHand(BuilderDoubleItem, 'item', 0, 0),
					).reject.toThrow('You cannot play cards that are in frozen slots')
				},
			},
			{startWithAllCards: true, noItemRequirements: true, forceCoinFlip: true},
		)
	})
})
