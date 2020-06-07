var activePlayer,scores,roundscore,playing;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if (playing) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDom = document.querySelector('.dice');
        
        diceDom.style.display = 'block';
        diceDom.src = `dice-${dice}.png` ;

        if (dice !== 1){
            roundscore += dice;
            document.getElementById(`current-${activePlayer}`).textContent = roundscore;
        } else {
            reset();
        }

    }
});

document.querySelector('.btn-hold').addEventListener('click',function () {
    if (playing) {
            // add currnet score to global score
            scores[activePlayer] += roundscore;
            //update Ui
            document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

            //if player wonthe game
            if (scores[activePlayer] >= 100) {
                document.querySelector(`#name-${activePlayer}`).textContent = 'WINNER!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                playing = false;
            
            } else {
                reset();
            }
    }
});

function reset() {
    document.getElementById(`current-${activePlayer}`).textContent = 0;        

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscore = 0;

    document.querySelector(`.player-0-panel`).classList.toggle('active');
    document.querySelector(`.player-1-panel`).classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    
}

document.querySelector('.btn-new').addEventListener('click',init);

function init() {
    scores = [0,0];
    roundscore = 0;
    activePlayer = 0;
    playing = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');

}