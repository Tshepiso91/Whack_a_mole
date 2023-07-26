# Whack-A-Mole Game

Whack-A-Mole is a fun and interactive game where players need to hit a mole that randomly appears and moves among a grid of squares. The goal is to hit as many moles as possible within the time limit to earn points.

## How to Play

1. The game starts automatically when the page loads.
2. Look out for the mole that randomly appears and moves among the squares.
3. When the mole appears, quickly click on the square where the mole is to earn points.
4. Each successful hit on the mole will increase your score.
5. The game has a countdown timer, which displays the remaining time to play.
6. When the timer reaches zero, the game ends, and your final score is displayed.

## Game Rules

- The mole moves to a new random square every second, making it challenging to hit.
- Hitting the mole when it appears will earn you points.
- Missing the mole or clicking on the wrong square will not result in any points.
- The game ends when the timer reaches zero, and the final score is displayed.

## Technologies Used

- HTML
- CSS
- JavaScript

## Variables

- `squares`: An array that stores references to all the squares on the grid.
- `mole`: The element representing the mole that moves among the squares.
- `timeLeft`: The element that displays the remaining time in the game.
- `score`: The element that displays the player's score.
- `result`: The variable that holds the player's score.
- `currentTime`: The variable that stores the remaining time to play.
- `timerId`: The variable that holds the ID of the interval for moving the mole.
- `hitPosition`: The variable that stores the position of the mole on the grid.

## Functions

- `randomSquare()`: This function removes the mole from all squares and adds the mole randomly to the grid by selecting a random square and adding the "mole" class to it.

- `moveMole()`: This function sets the interval for moving the mole, calling `randomSquare()` every second to move the mole to a new random square.

- `countDown()`: This function decreases the remaining time by one second every second, displaying the updated time on the screen. When the time reaches zero, it ends the game and displays the final score.

- `mousedown` Event Listener: An event listener is added to each square to detect when a player clicks on it. If the clicked square matches the position of the mole, the player earns points, and the score is updated.

## Start Playing

The game starts automatically when you load the page. Try to hit as many moles as possible before the timer runs out!

## Credits

- Inspired/taught by: Ania Kubów [GitHub Profile](https://github.com/kubowania)
- Mole image by [OpenClipart-Vectors](https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=158236) from [Pixabay](https://pixabay.com/)


Good luck and have fun playing Whack-A-Mole!

