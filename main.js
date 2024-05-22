const quest = {
    answer: 'Si',
    question: 'Il tuo personaggio è maschio?',
    progression: [
        {
            answer: 'Si',
            question: 'Il tuo personaggio porta gli occhiali?',
            progression: [
                {
                    answer: 'Si',
                    question: 'Il tuo personaggio è vivo?',
                    progression: [
                        {
                            answer: 'Si',
                            question: ' ',
                            progression: [
                                {
                                    answer: 'Si',
                                    question: ''
                                },
                                {
                                    answer: 'No',
                                    question: ''
                                }
                            ]
                        },
                        {
                            answer: 'No',
                            question: 'Congratulazioni, il tuo personaggio è Stephen Hawking!',
                        }
                    ]
                },
                {
                    answer: 'No',
                    question: ' '
                }
            ]
        },
        {
            answer: 'No',
            question: 'Il tuo personaggio porta gli occhiali?',
            progression: [
                {
                    answer: 'Si',
                    question: 'Congratulazioni, il tuo personaggio è Katherine Johnson!',
                },
                {
                    answer: 'No',
                    question: 'Il tuo personaggio è una matematica?',
                    progression: [
                        {
                            answer: 'Si',
                            question: 'Congratulazioni, il tuo personaggio è Ada Lovelace!'
                        },
                        {
                            answer: 'No',
                            question: 'Il tuo personaggio è nata prima del 1900?',
                            progression: [
                                {
                                    answer: 'Si',
                                    question: 'Congratulazioni, il tuo personaggio è Marie Curie!'
                                },
                                {
                                    answer: 'No',
                                    question: 'Congratulazioni, il tuo personaggio è Frida Kahlo!'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};














const charactersQ = [
    quest,

];

var donna = false;

let count = 0;

let currentQuestion = 0;
let currentCharacter = charactersQ[0];
let gameResult = '';

const questionElement = document.getElementById('question');

const resultElement = document.getElementById('result');

const yes = document.getElementById('yes-btn');
const no = document.getElementById('no-btn');
const res = document.getElementById('restart');

const lis = document.getElementById('listb');

function startGame() {
    document.getElementById("myImg").src = '';
    res.style.display = "none";
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
    count++;
    
    console.log(count);

    //*/
    //if (count == 2) {
    //    document.getElementById("myImg").src = 'img/Wallpaper.jpg';
    //} else if (count == 3 && answerr === 'yes') {
    //    document.getElementById("myImg").src = 'img/itis.png';
    //} else {
    //    document.getElementById("myImg").style.display = "none";
    //}
    //*/

    if (answerr === 'yes') {
        currentCharacter = currentCharacter.progression[0];
    } else if (answerr === 'no') {
        currentCharacter = currentCharacter.progression[1];
    }

    if (currentCharacter.progression !== undefined) {
        if (count == 1 && answerr === 'no') {
            console.log(donna);
            donna = true,
            console.log(donna);
        }
        startGame();
    } else {
        if (count == 3 && answerr === 'no' && donna !== true) {
            document.getElementById("myImg").src = 'img/StephenHawking.png';
        }

        if (count == 2 && answerr === 'yes' && donna === true) {
            document.getElementById("myImg").src = 'img/KatherineJohnson.webp';
        }
        if (count == 3 && answerr === 'yes' && donna === true) {
            document.getElementById("myImg").src = 'img/AdaLovelace.jpg';
        }
        if (count == 4 && answerr === 'yes' && donna === true) {
            document.getElementById("myImg").src = 'img/MarieCurie.jpg';
        }
        if (count == 4 && answerr === 'no' && donna === true) {
            document.getElementById("myImg").src = 'img/FridaKahlo.jpg';
        }
        console.log("AAAAAAAAAAA");
        lis.style.display = "none";
        res.style.display = "block";
        gameResult = `${currentCharacter.question}`;
        displayResult();
    }  
}

function displayResult() {
    resultElement.textContent = gameResult;
}

function restartGame() {
    count = 0;
    currentQuestion = 0;
    currentCharacter = charactersQ[0];
    gameResult = '';
    lis.style.display = "block";
    res.style.display = "none";
    document.getElementById("myImg").src = 'img/Wallpaper.jpg';
    startGame();
}

startGame();