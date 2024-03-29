# Enigma Tempo

## A educational game inspired on blizzard's card game 'hearthstone' and based on Rymedy's [hearthstone-web](https://rymedy.github.io/hearthstone-web/) project.

Enigma Tempo is a simple clone version of hearthstone-web, created by Rymedy, developed in JS to be a demo game and part of a final paper.

## Whats new?

### The effects were implemented and can be used by any card. Now, effects can receive parameters to customize the card behaviour.

### Computer cards can use the effects too, to improve the battle dinamics.

### AI was refactored and a little bit smarter. (Was developed before the computer cards effects, so need more work)

### Now is possible costumize the match by passing some data. This data came from the [site](https://github.com/daniellydsa/SiteEnigmaTempo), another project part.

### We optate to change the visual elements to disassociate from Blizzard's Hearthstone. By now, there's some placeholders. (Yes, we still working on this step)

### The game consume data from a node.js [api](https://github.com/RafaelZapata/api_enigma_tempo), the last project part. All game database are there.

## Arts

The Acting Icons were created by Caz Wolf, available [here](https://cazwolf.itch.io/).
The Personalities powers assets were created by Craftpix, available [here](https://craftpix.net)

## Where can I play?

To play the Enigma Tempo click [here](https://diogoasp.github.io/enigmaTempo/).

The hearthstone-web preview of the game:
![This image failed to load.](https://github.com/Rymedy/hearthstone-web/blob/master/src/images/gamepreview.PNG)

## User Manual

### How to play?

When playing you will start off with a deck of cards, 3 cards in your hand and 1 'mana'. To place a card down simply drag a card from your hand onto the board (by releasing) with your cursor, also note to place a card down you must have the required 'mana' you can view your mana from the bottom right of the screen. You can also view the mana cost of the card (being the value at the top left of the card). The cards you can place a card down will be outlined by a green border around the card. Then to end your turn simply click the end turn button. The opponent will then place a card down. It will then be your turn again and also note you will draw a card every turn as well as gain 1 mana crystal.

You can now use your card to attack the enemy's card as cards have to wait 1 turn after being placed to attack. The bottom left value on the cards are the attack value and the bottom right value on the cards are the health value. To attack the enemy simply click on the card you want to attack with and click on the opponent's card you want to attack, you can attack once per turn with each card. Note that when attacking the enemy's card will also deal damage to your card (The enemy's card's health is subtracted by your attack and your card's health is subtracted by the enemy's card's attack).

To win you must attack the enemy 'hero' and when their health reaches 0 you win, however when your health reaches 0 the enemy wins and you lose. The player also has a 'hero power' which deals 1 damage to the opponent of the players choice and can choose by simply clicking on the hero power next to the hero portrait and clicking on an enemy of their choice, however note this costs 2 mana to play.

Finally also note some of the player's cards will have card effects which also have a big impact on the gameplay. The following keywords show their effect:
Battlecry = When the card is played the effect is played.
Taunt = That card must be attacked and other cards cannot be attacked.
Divine Shield = The card is invulnerable to any damage taken next, then breaks.
Charge = Rally all allied cards to have the ability to attack when card is played.

TLDR: Each card can attack once per turn. Both players draw a card every turn. The player has mana which is used to play cards down (which cost mana). To win you must attack the enemy hero until their health reaches 0. However when your hero's portrait reaches 0, you lose. Cards also have card effects which change gameplay strategies and decisions etc.

## Installation Manual

If you would like to install the game to play locally (instead of playing it online) you can simply download the zip here on the github repository which can be found here:
![This image failed to load.](https://github.com/Rymedy/hearthstone-web/blob/master/src/images/installationmanualimg1.png)
Once the zip is installed, it can be found most likely in your downloads folder on the drive. Simply right click the folder (hearthstone-web-main) and select "Extract to "hearthstone-web-main\"". Then simply open the folder, double click "index.html" and play the game!

## Where can I report glitches and bugs?

You can report glitches and bugs in the project by simply making a request [here](https://github.com/Rymedy/hearthstone-web/issues).

## Is this project still in development?

Yes, please note this project is still in major development and will contain bugs and undeveloped features.

These bugs and features will swiftly be patched and developed in future patches.

## Will you implement multiplayer functionality in the future?

If I have the time and motivation, of course!

## License

[MIT](https://choosealicense.com/licenses/mit/)
