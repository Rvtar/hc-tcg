export type ExpansionInfo = {
	name: string
	disabled: boolean
}

export type ExpansionT =
	// Vanilla
	| 'item'
	| 'default'
	| 'alter_egos'
	| 'festive_fun' // Advent
	| 'beds'
	| 'boss'
	// Scuffed
	| 'bedrock_gang'
	| 'tales_of_bedrock_gang'
	| 'plain_pastures'
	| 'nightmare_on_mojang'

export type ExpansionDict = {
	readonly [Expansion in ExpansionT]: ExpansionInfo
}

export const EXPANSIONS: ExpansionDict = {
	item: {name: 'Item', disabled: false},
	default: {name: 'Hermitcraft', disabled: false},
	alter_egos: {name: 'Alter Egos', disabled: false},
	festive_fun: {name: 'Festive Fun', disabled: false},
	beds: {name: 'Beds', disabled: true}, //@ScTODO Integrate into Minecraft
	boss: {name: 'Boss', disabled: true},
	bedrock_gang: {name: 'Bedrock Gang', disabled: false},
	tales_of_bedrock_gang: {name: 'Tales of Bedrock Gang', disabled: false},
	plain_pastures: {name: 'Plain Pastures', disabled: false},
	nightmare_on_mojang: {name: 'Nightmare On Mojang', disabled: false},
}
