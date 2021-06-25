export default class Deck {
	constructor(cards = freshDeck()) {
		this.cards = cards
	}


	get numberOfCards() {
		return this.cards.length
	}

	shuffle() {
		for (let i = this.numberOfCards - 1; i > 0; i--) {
			const newIndex = Math.floor(Math.random() * (i + 1))
			const oldValue = this.cards[newIndex]
			this.cards[newIndex] = this.cards[i]
			this.cards[i] = oldValue
		}
	}
}
class MinionCard {
	constructor(attack, health, imageString) {
		this.imageString = imageString;
		this.attack = attack;
		this.health = health;
		this.mana = Math.round((this.attack + this.health) * 0.5)
	}

	getPlayerHTML() {
		const playerCardDiv = document.createElement('div')
		const playerAttackValue = document.createElement('div')
		const playerHealthValue = document.createElement('div')
		playerCardDiv.classList.add("cardinplay")
		playerCardDiv.classList.add("player-cardinplay")
		playerAttackValue.classList.add("attackValue")
		playerHealthValue.classList.add("healthValue")
		playerCardDiv.appendChild(playerAttackValue)
		playerCardDiv.appendChild(playerHealthValue)
		playerAttackValue.innerText = this.attack
		playerHealthValue.innerText = this.health
		playerCardDiv.style.backgroundImage = "url('" + this.imageString + "')";
		return playerCardDiv
	}
	getComputerHTML() {
		const computerCardDiv = document.createElement('div')
		const computerAttackValue = document.createElement('div')
		const computerHealthValue = document.createElement('div')
		computerCardDiv.classList.add("cardinplay")
		computerCardDiv.classList.add("computer-cardinplay")
		computerAttackValue.classList.add("attackValue")
		computerHealthValue.classList.add("healthValue")
		computerCardDiv.appendChild(computerAttackValue)
		computerCardDiv.appendChild(computerHealthValue)
		computerAttackValue.innerText = this.attack
		computerHealthValue.innerText = this.health
		computerCardDiv.style.backgroundImage = "url('" + this.imageString + "')";

		return computerCardDiv
	}
	getPlayerCardsInHandHTML() {
		const playerCardInHandDiv = document.createElement('div')
		const playerCardFaceInHandDiv = document.createElement('div')
		const playerAttackValueInHand = document.createElement('div')
		const playerHealthValueInHand = document.createElement('div')
		const playerManaValueInHand = document.createElement('div')
		playerCardInHandDiv.classList.add("card")
		playerCardFaceInHandDiv.classList.add("card-face")
		playerAttackValueInHand.classList.add("cardAttackValue")
		playerHealthValueInHand.classList.add("cardHealthValue")
		playerManaValueInHand.classList.add("cardManaValue")
		playerCardInHandDiv.appendChild(playerCardFaceInHandDiv)
		playerCardFaceInHandDiv.appendChild(playerAttackValueInHand)
		playerCardFaceInHandDiv.appendChild(playerHealthValueInHand)
		playerCardFaceInHandDiv.appendChild(playerManaValueInHand)
		playerAttackValueInHand.innerText = this.attack
		playerHealthValueInHand.innerText = this.health
		playerManaValueInHand.innerText = this.mana
		playerCardFaceInHandDiv.style.backgroundImage = "url('" + this.imageString + "')";
		return playerCardInHandDiv
	}
}

function freshDeck() {
	let auchenai_soulpriest = new MinionCard(1, 2, "src/cards/auchenai_soulpriest.jpg")
	let bolvar_fordragon = new MinionCard(3, 1, "src/cards/bolvar_fordragon.jpg")
	let cairne_bloodhoof = new MinionCard(3, 2, "src/cards/cairne_bloodhoof.jpg")
	let dark_whispers = new MinionCard(4, 2, "src/cards/dark_whispers.jpg")
	let doom = new MinionCard(4, 5, "src/cards/doom.jpg")
	let edwin_vancleef = new MinionCard(7, 6, "src/cards/edwin_vancleef.jpg")
	let flamestrike = new MinionCard(4, 1, "src/cards/flamestrike.jpg")
	let kabal_crystal_runner = new MinionCard(1, 4, "src/cards/kabal_crystal_runner.jpg")
	let lunar_visions = new MinionCard(8, 6, "src/cards/lunar_visions.jpg")
	let mal_ganis = new MinionCard(10, 10, "src/cards/mal_ganis.jpg")
	let reno_jackson = new MinionCard(2, 8, "src/cards/reno_jackson.jpg")
	let saboteur = new MinionCard(2, 4, "src/cards/saboteur.jpg")
	let starfall = new MinionCard(2, 6, "src/cards/starfall.png")
	let sylvanas_windrunner = new MinionCard(20, 20, "src/cards/sylvanas_windrunner.jpg")
	let tirion_fordring = new MinionCard(3, 5, "src/cards/tirion_fordring.jpg")
	let unstable_portal = new MinionCard(9, 4, "src/cards/unstable_portal.jpg")
	let vaporize = new MinionCard(1, 2, "src/cards/vaporize.jpg")
	let wilfred_fizzlebang = new MinionCard(3, 1, "src/cards/wilfred_fizzlebang.jpg")
	let worgen_infiltrator = new MinionCard(3, 2, "src/cards/worgen_infiltrator.jpg")
	let ancient_of_lore = new MinionCard(4, 2, "src/cards/ancient_of_lore.jpg")
	let darnassus_aspirant = new MinionCard(4, 5, "src/cards/darnassus_aspirant.jpg")
	let astral_communion = new MinionCard(7, 6, "src/cards/astral_communion.jpg")
	let anubisath_sentinel = new MinionCard(4, 1, "src/cards/anubisath_sentinel.png")
	let dragon_consort = new MinionCard(1, 4, "src/cards/dragon_consort.jpg")
	let emperor_thaurissan = new MinionCard(8, 6, "src/cards/emperor_thaurissan.jpg")
	let elven_archer = new MinionCard(1, 1, "src/cards/elven_archer.jpg")
	let voodoo_doctor = new MinionCard(2, 1, "src/cards/voodoo_doctor.jpg")
	let frozen_flower = new MinionCard(2, 4, "src/cards/sylvanas_windrunner.jpg")
	let dark_mage = new MinionCard(2, 6, "src/cards/sylvanas_windrunner.jpg")
	let dark_warrior = new MinionCard(20, 20, "src/cards/sylvanas_windrunner.jpg")
	let dark_shaman = new MinionCard(3, 5, "src/cards/sylvanas_windrunner.jpg")
	let dark_rogue = new MinionCard(9, 4, "src/cards/sylvanas_windrunner.jpg")

	return [
	auchenai_soulpriest, 
	bolvar_fordragon, 
	cairne_bloodhoof, 
	dark_whispers, 
	doom, 
	edwin_vancleef, 
	flamestrike, 
	kabal_crystal_runner, 
	lunar_visions, 
	mal_ganis, 
	reno_jackson,
	saboteur,
	starfall,
	sylvanas_windrunner,
	tirion_fordring,
	unstable_portal,
	vaporize,
	wilfred_fizzlebang,
	worgen_infiltrator,
	ancient_of_lore,
	darnassus_aspirant,
	astral_communion,
	anubisath_sentinel,
	dragon_consort,
	emperor_thaurissan,
	elven_archer,
	voodoo_doctor,
	frozen_flower,
	dark_mage,
	dark_warrior,
	dark_shaman,
	dark_rogue
	]
}