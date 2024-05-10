const quest = {
    answer: 'Si',
    question: '¿Te gusta la programación?',
    progression: [
        {
            answer: 'Si',
            question: '¿Te gustan los videojuegos?',
            progression: [
                {
                    answer: 'Si',
                    question: '¿Te gustaría trabajar en la industria de los videojuegos?',
                    progression: [
                        {
                            answer: 'Si',
                            question: '¿EL PORCODIOOOOOOOO?'
                            
                        },
                        {
                            answer: 'No',
                            question: '¿Te gustaría trabajar en una empresa de desarrollo de software?'
                        }
                    ]
                },
                {
                    answer: 'No',
                    question: '¿Te gustaría trabajar en una empresa de desarrollo de software?'
                }
            ]
        },
        {
            answer: 'No',
            question: '¿Te gustaría trabajar en una empresa de desarrollo de software?'
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
        gameResult = `Tu personaje es ${currentCharacter.question}`;
        displayResult();
    }  
}

function displayResult() {
    resultElement.textContent = gameResult;
}

startGame();