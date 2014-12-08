// Function that returns an array of every characters available in this game
var getCharacters = function() {
	var characters = [
		{
			name: "Gandalf",
			picture: "gandalf.jpg",
			skin: ["white"],
			mouse: ["open", "little"],
			hair: ["grey", "long"],
			eyes: ["small", "black"],
			nose: ["big"],
			type: ["human", "actor", "old"],
			hat: ["got", "big", "dark"],
			clothes: ["robe", "grey"],
			sexe: ["man"]
		},
		{
			name: "Sonic",
			picture: "sonic.jpg",
			skin: ["blue"],
			mouse: ["open", "big", "smile"],
			hair: ["blue", "long"],
			eyes: ["big", "green"],
			nose: ["small"],
			type: ["animal", "game", "young"],
			hat: [""],
			clothes: ["shoes"],
			sexe: ["man"]
		},
		{
			name: "Infirmière Joelle",
			picture: "infirmiere-joelle.jpg",
			skin: ["white"],
			mouse: ["close", "little"],
			hair: ["pink", "long"],
			eyes: ["big", "blue"],
			nose: ["small"],
			type: ["human", "anime", "young"],
			hat: ["got", "big", "bright"],
			clothes: ["dress", "white"],
			sexe: ["woman"]
		},
		{
			name: "Indiana Jones",
			picture: "indiana-jones.jpg",
			skin: ["tan"],
			mouse: ["open", "small"],
			hair: ["brown", "short"],
			eyes: ["small", "brown"],
			nose: ["big"],
			type: ["human", "actor", "old"],
			hat: ["got", "big", "dark"],
			clothes: ["shirt"],
			sexe: ["man"]
		},
		{
			name: "L",
			picture: "L.jpg",
			skin: ["white"],
			mouse: ["close", "big", "smile"],
			hair: ["black", "long"],
			eyes: ["big", "grey"],
			nose: ["small"],
			type: ["anime", "human", "young"],
			hat: [""],
			clothes: ["shirt", "white"],
			sexe: ["man"]
		},
		{
			name: "Leeloo Dallas",
			picture: "leeloo-dallas.jpg",
			skin: ["white"],
			mouse: ["open", "big"],
			hair: ["orange", "long"],
			eyes: ["big", "blue"],
			nose: ["small"],
			type: ["human", "actor", "young"],
			hat: [""],
			clothes: ["shirt", "white"],
			sexe: ["woman"]
		},
		{
			name: "Lisa Simpson",
			picture: "lisa-simpson.jpg",
			skin: ["yellow"],
			mouse: ["close", "big", "smile"],
			hair: ["blond", "short"],
			eyes: ["big", "black"],
			nose: ["small"],
			type: ["human", "anime", "young"],
			hat: [""],
			clothes: ["dress"],
			sexe: ["woman"]
		},
		{
			name: "Luffy",
			picture: "luffy.jpg",
			skin: ["white"],
			mouse: ["close", "big"],
			hair: ["black", "short"],
			eyes: ["big", "black"],
			nose: ["small"],
			type: ["human", "anime", "young"],
			hat: ["got", "big"],
			clothes: ["shirt"],
			sexe: ["man"]
		},
		{
			name: "Naruto",
			picture: "naruto.jpg",
			skin: ["white"],
			mouse: ["close", "small", "smile"],
			hair: ["blond", "short"],
			eyes: ["big", "blue"],
			nose: ["small"],
			type: ["human", "anime", "young"],
			hat: ["got"],
			clothes: ["shirt"],
			sexe: ["man"]
		},
		{
			name: "Marty Mcfly",
			picture: "marty-mcfly.jpg",
			skin: ["white"],
			mouse: ["open", "big"],
			hair: ["borwn", "short"],
			eyes: ["small", "blue"],
			nose: ["small"],
			type: ["human", "actor", "young"],
			hat: ["got"],
			clothes: ["shirt"],
			sexe: ["man"]
		},
		{
			name: "Mystique",
			picture: "mystique.jpg",
			skin: ["blue"],
			mouse: ["close", "small"],
			hair: ["brown", "long", "orange"],
			eyes: ["small", "yellow"],
			nose: ["small"],
			type: ["human", "actor", "young"],
			hat: [""],
			clothes: [],
			sexe: ["woman"]
		},
		{
			name: "Peach",
			picture: "peach.jpg",
			skin: ["white"],
			mouse: ["close", "small"],
			hair: ["blond", "long"],
			eyes: ["big", "blue"],
			nose: ["small"],
			type: ["human", "game", "young"],
			hat: ["got"],
			clothes: ["dress"],
			sexe: ["woman"]
		},
		{
			name: "Princesse Leia",
			picture: "princess-leia.jpg",
			skin: ["white"],
			mouse: ["open", "big"],
			hair: ["brown", "long"],
			eyes: ["small", "black"],
			nose: ["small"],
			type: ["human", "actor", "young"],
			hat: [""],
			clothes: ["dress"],
			sexe: ["woman"]
		},
		{
			name: "Zelda",
			picture: "zelda.jpg",
			skin: ["white"],
			mouse: ["close", "small"],
			hair: ["blond", "brown", "long"],
			eyes: ["big", "blue"],
			nose: ["small"],
			type: ["human", "game", "young"],
			hat: ["got"],
			clothes: ["dress"],
			sexe: ["woman"]
		},
		{
			name: "Samus",
			picture: "samus.jpg",
			skin: ["white"],
			mouse: ["close", "small"],
			hair: ["blond", "long"],
			eyes: ["small", "blue"],
			nose: ["small"],
			type: ["human", "game", "young"],
			hat: ["got"],
			clothes: ["shirt"],
			sexe: ["woman"]
		},
		{
			name: "Sangoku",
			picture: "sangoku.jpg",
			skin: ["white"],
			mouse: ["close", "small"],
			hair: ["black", "long"],
			eyes: ["big", "black"],
			nose: ["small"],
			type: ["human", "anime", "young"],
			hat: [""],
			clothes: ["pants"],
			sexe: ["man"]
		},
		{
			name: "Sheldon",
			picture: "sheldon.jpg",
			skin: ["white"],
			mouse: [],
			hair: ["brown", "short"],
			eyes: ["small", "black"],
			nose: ["small"],
			type: ["human", "actor", "young"],
			hat: [""],
			clothes: ["shirt"],
			sexe: ["man"]
		},
		{
			name: "Spock",
			picture: "spock.jpg",
			skin: ["white"],
			mouse: ["close", "small"],
			hair: ["black", "short"],
			eyes: ["big", "black"],
			nose: ["big"],
			type: ["human", "actor", "young"],
			hat: [""],
			clothes: ["shirt"],
			sexe: ["man"]
		},
		{
			name: "Lapin cretin",
			picture: "lapin-cretin.jpg",
			skin: ["white"],
			mouse: ["open", "big", "smile"],
			hair: ["white", "short"],
			eyes: ["big", "red"],
			nose: ["small"],
			type: ["animal", "game", "young"],
			hat: ["got"],
			clothes: [],
			sexe: ["man"]
		},
		{
			name: "Lara Croft",
			picture: "lara-croft.jpg",
			skin: ["tan"],
			mouse: ["close", "big", "smile"],
			hair: ["brown", "long"],
			eyes: ["small", "brown"],
			nose: ["small"],
			type: ["human", "game", "young"],
			hat: [""],
			clothes: ["shirt"],
			sexe: ["woman"]
		},
	];

	return characters;
};

// Global containing list of characters
Alloy.Globals.characters = getCharacters();

// Global containing list of questions and their options
Alloy.Globals.questions = [
	{
		name: "skin",
		options: ["white", "yellow", "tan", "blue"]
	},
	{
		name: "mouse",
		options: ["big", "small", "open", "close", "smile"]
	},
	{
		name: "hair",
		options: ["long", "short", "grey", "pink", "blue", "brown", "black", "blond", "white", "orange"]
	},
	{
		name: "eyes",
		options: ["big", "small", "black", "blue", "green", "red", "brown", "grey", "yellow"]
	},
	{
		name: "nose",
		options: ["big", "small"]
	},
	{
		name: "type",
		options: ["human", "anime", "game", "old", "young", "animal", "actor"]
	},
	{
		name: "hat",
		options: ["got", "big", "small", "dark", "bright"]
	},
	{
		name: "clothes",
		options: ["white", "shoes", "shirt", "dress", "robe", "pants"]
	},
	{
		name: "sexe",
		options: ["man", "woman"]
	},
];

// Sets player1 and player2 characters to null
// Sets player1 and player2's boards to initial state (with all characters)
// Game is now ready to start
exports.initializeGame = function() {
	Alloy.Globals.players = { player1: "", player2: ""};

	Alloy.Globals.board1 = getCharacters();
	Alloy.Globals.board2 = getCharacters();
};
