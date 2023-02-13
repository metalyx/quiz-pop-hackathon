import showResultsScreen from "./showResultsScreen";
import data from '../data/dataset.json'
import combineElements from "./combineElements";
import initTopic from "./initTopic";
import render from "./render";

export default function createControlls () {
    const controlls = document.createElement('div');
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');

    prevButton.innerText = '<';
    prevButton.tabIndex = 0;
    nextButton.innerText = '>';
    nextButton.tabIndex = 0;

    prevButton.classList.add('question-controlls-button');
    if (currentTopicDataIndex === 0) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }

    nextButton.classList.add('question-controlls-button');

    nextButton.addEventListener('click', () => {
        // Did the user chose the option?
        if (data[currentTopicName][currentTopicDataIndex].userAnswer || curUserAnswer) {
            if (currentTopicDataIndex === data[currentTopicName].length - 1) {

                data[currentTopicName][currentTopicDataIndex].userAnswer = data[currentTopicName][currentTopicDataIndex].userAnswer ?? curUserAnswer;
                curUserAnswer = null;

                const quizContainer = document.getElementById('quiz-container');
                render(quizContainer, showResultsScreen());
            } else {
                data[currentTopicName][currentTopicDataIndex].userAnswer = data[currentTopicName][currentTopicDataIndex].userAnswer ?? curUserAnswer;
    
                curUserAnswer = null;
                currentTopicDataIndex += 1;

                initTopic();
            }
        } else {
            const optionsContainer = document.getElementsByClassName('option-list')[0];
            optionsContainer.classList.add('not-valid');

            setTimeout(() => {
                optionsContainer.classList.remove('not-valid');
            }, 400);
        }   
    });

    prevButton.addEventListener('click', () => {
        if (currentTopicDataIndex !== 0) {
            currentTopicDataIndex -= 1;
            initTopic();
        }
    });

    controlls.appendChild(combineElements([prevButton, nextButton]));
    controlls.classList.add('controlls-container');
    return controlls;
}