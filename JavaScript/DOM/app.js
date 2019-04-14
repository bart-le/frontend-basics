/*
GAME RULES:
1. The game has 2 players, playing in rounds.
2. In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score.
3. BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn.
4. The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn.
5. The first player to reach 100 points on GLOBAL score wins the game.
6. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (HINT: Always save the previous dice roll in a separate variable).
7. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (HINT: you can read that value with the .value property in JavaScript.)
*/

var scores, roundScore, activePlayer, gamePlaying, lastDice;
init();

document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlaying) {
		var dice = Math.ceil(Math.random() * 6);
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';
		
		
		if (dice === 6 && lastDice === 6) {
			scores[activePlayer] = 0;
			document.querySelector('#score-' + activePlayer).textContent = 0;
		} else if (dice !== 1) {
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			nextPlayer();
		}
		lastDice = dice;
	}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
		scores[activePlayer] += roundScore;
		
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		var input = document.querySelector('.final-score').value;
		var winningScore;

		if (input) {
			winningScore = input;
		} else {
			winningScore = 100;
		}

		if (scores[activePlayer] >= winningScore) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer();
		}
	}
});

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	document.querySelector('.dice').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}