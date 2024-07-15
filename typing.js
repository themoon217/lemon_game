'use strict';

const questions = [
    { kanji:'えたいの知れない不吉な魂が私の心を始終おさえつけていた', romaji:'etainosirenaihukitunakatamarigawatasinokokorowosijyuuosaetuketeita' }
];

const entered = document.getElementById('entered');
const remained = document.getElementById('remained');
const inputText = document.getElementById('inputText');
const game = document.getElementById('game');
const message = document.getElementById('message');
const replayBtn = document.getElementById('replayBtn');

let questionIndex = 0;
let currentQuestion = questions[questionIndex];
let remainedTextWords = currentQuestion.romaji.split('');
let enteredTextWords = [];
let displayedText = currentQuestion.kanji;

const setQuestion = () => {
    currentQuestion = questions[questionIndex];
    displayedText = currentQuestion.kanji;
    remainedTextWords = currentQuestion.romaji.split('');
    enteredTextWords = [];
    entered.textContent = '';
    remained.textContent = displayedText;
    inputText.value = '';
};

inputText.addEventListener('input', (e) => {
    const input = e.target.value.toLowerCase();
    if (remainedTextWords[0] === input.slice(-1)) {
        enteredTextWords.push(remainedTextWords.shift());
        entered.textContent = enteredTextWords.join('');
        remained.textContent = displayedText.slice(enteredTextWords.join('').length);
        inputText.value = '';
        
        if (remainedTextWords.length === 0) {
            questionIndex++;
            if (questionIndex >= questions.length) {
                game.classList.add('hidden');
                message.classList.remove('hidden');
            } else {
                setQuestion();
            }
        }
    }
});

replayBtn.addEventListener('click', () => {
    window.location.reload();
});

setQuestion();
