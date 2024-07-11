'use strict';

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');
const player1 = document.querySelector('.player--1');
const player0 = document.querySelector('.player--0');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

// starting condition.
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// global variable to run the current score everytime.
let crnt_score = 0;
let playing = true;

const getActivePlayer = function () {
  if (player0.classList.contains('player--active')) return player0;
  else return player1;
};

function set_currentScore(val) {
  const player = getActivePlayer();
  player.querySelector('.current-score').textContent = val;
}

function add_crnt_score(player, val) {
  const oldVal = player.querySelector('.score').textContent;
  player.querySelector('.score').textContent = Number(oldVal) + val;
}

function switch_active_player(player) {
  // active player = player.
  set_currentScore(0);
  // if (player.classList.contains('player--0')) {
  //   player0.classList.remove('player--active');
  //   player1.classList.add('player--active');
  // } else {
  //   player1.classList.remove('player--active');
  //   player0.classList.add('player--active');
  // }
  // same as just writing the above code.
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  crnt_score = 0;
}

const check_winner = function () {
  const player = getActivePlayer();
  const current_active_score = Number(
    player.querySelector('.score').textContent
  );
  if (current_active_score >= 100) {
    player.classList.add('player--winner');
    playing = false;
    diceEl.classList.add('hidden');
    return true;
  }
  return false;
};

// Roll the dice functionality.
btnRoll.addEventListener('click', function () {
  if (playing) {
    let r = Math.random();
    let rand = Math.floor(r * 6) + 1;

    // showing the value on dice.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${rand}.png`;

    if (rand === 1) {
      if (player0.classList.contains('player--active')) {
        crnt_score = 0;
        switch_active_player(player0);
      } else {
        crnt_score = 0;
        switch_active_player(player1);
      }
    } else {
      crnt_score = crnt_score + rand;
      set_currentScore(crnt_score);
    }
  }
});

// hold dice functionality.
btnHold.addEventListener('click', function () {
  if (playing) {
    // get the active player
    let player = getActivePlayer();
    // and add the current sum to the score
    add_crnt_score(player, crnt_score);
    if (!check_winner()) switch_active_player(player);
  }
});

btnNew.addEventListener('click', function () {
  crnt_score = 0;
  if (player0.classList.contains('player--winner')) {
    player0.classList.remove('player--winner');
  } else {
    player1.classList.remove('player--winner');
  }

  player0.querySelector('#score--0').textContent = 0;
  player1.querySelector('#score--1').textContent = 0;
  player0.querySelector('#current--0').textContent = 0;
  player1.querySelector('#current--1').textContent = 0;
  diceEl.classList.add('hidden');
  playing = true;
  // while doing the reset check the new active player should be player0, not player1.
  player0.classList.add('player--active');
  if (player1.classList.contains('player--active'))
    player1.classList.remove('player--active');
});
