import render from "./render";
import combineElements from "./combineElements";
import getTask from "./getTask"

export default function initTopic () {
    const quizContainer = document.getElementById('quiz-container');

    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options-container');

    const controllsContainer = document.createElement('div');
    controllsContainer.classList.add('controlls-container');

    const { questionP, optionsUl, controlls } = getTask();

    questionContainer.appendChild(questionP);
    optionsContainer.appendChild(optionsUl);
    controllsContainer.appendChild(controlls);
    
    render(quizContainer, combineElements([questionContainer, optionsContainer, controllsContainer]));
}
