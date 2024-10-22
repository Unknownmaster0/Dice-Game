# Dice-Game

## Description
Dice-Game is a simple multiplayer game where two players compete to be the first to score 100 points. The game involves rolling a dice, and players have two options:

- **Roll the Dice**: The player rolls the dice repeatedly until they get a 1. If a 1 is rolled, the current turn ends, and the cumulative temporary score is lost. The next player gets the turn.
- **Hold**: If the player is satisfied with the current cumulative temporary score, they can hold. The cumulative temporary score is added to their total score, and the next player gets the turn.

### Game Rules
- Players take turns to roll a dice and accumulate points.
- If a player rolls a 1, the cumulative score for that turn is lost, and the turn switches to the other player.
- If a player holds, the cumulative score is added to their total score.
- The first player to reach 100 points wins the game.
- The game also includes a button to start a new game.

### Example
If Player 1 rolls a 2, they can either:
- Roll again, with the cumulative temporary score of 2.
- Hold, adding 2 points to their total score.

If Player 1 rolls a 1, the cumulative temporary score is lost, and Player 2 takes the turn.

## How to Run
No installation is required as this is a simple static website. To play the game:
1. Clone the project.
2. Open the `index.html` file in your browser.

## Technologies Used
- HTML
- CSS
- JavaScript

## Author
Sagar Singh
