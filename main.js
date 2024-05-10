const quest = {
    answer: 'Si',
    question: 'Ti piace la programmazione?',
    progression: [
        {
            answer: 'Si',
            question: 'Ti piacciono i videogiochi?',
            progression: [
                {
                    answer: 'Si',
                    question: 'Ti piacerebbe lavorare in una compagnia di videogiochi?',
                    progression: [
                        {
                            answer: 'Si',
                            question: 'Il tuo personaggio è Itis?'
                            
                        },
                        {
                            answer: 'No',
                            question: 'Non ho scoperto il tuo personaggio'
                        }
                    ]
                },
                {
                    answer: 'No',
                    question: 'Non ho scoperto il tuo personaggio'
                }
            ]
        },
        {
            answer: 'No',
            question: 'Non ho scoperto il tuo personaggio'
        }
    ]
};











































































const charactersQ = [
    quest,

];

let currentQuestion = 0;
let currentCharacter = charactersQ[0];
let gameResult = '';

const questionElement = document.getElementById('question');

const resultElement = document.getElementById('result');

function startGame() {
    
    let questionText = "";


    let currentCharacters = charactersQ[currentQuestion];
    while (currentCharacters.answerr !== undefined) {
        questionText += currentCharacter.answerr + "?";   
        currentCharacters = currentCharacter.progression[answerr];
        answerr = prompt(questionText);
    }

    questionElement.textContent = questionText + currentCharacter.question;

    displayResult();
}


function checkAnswer(answerr) {

    if (answerr === 'yes') {
        currentCharacter = currentCharacter.progression[0];
    } else if (answerr === 'no') {
        currentCharacter = currentCharacter.progression[1];
    }

    if (currentCharacter.progression !== undefined) {
        startGame();
    } else {
        gameResult = `${currentCharacter.question}`;
        displayResult();
    }  
}

function displayResult() {
    resultElement.textContent = gameResult;
}

startGame();