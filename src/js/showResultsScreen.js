import getHeadingElement from "./getHeadingElement";
import render from "./render";
import combineElements from "./combineElements";
import init from "./init";
import data from "../data/dataset.json";

export default function showResultsScreen (fromLocalStorage = false, topicName) {

    const resultsContainer = document.createElement('div');
    resultsContainer.classList.add('results-container');

    const heading = getHeadingElement('Test report', false, true);

    const ul = document.createElement('ul');
    ul.classList.add('results-list');

    const liCorrectAnswers = document.createElement('li');
    const liInCorrectAnswers = document.createElement('li');
    const liTotalScore = document.createElement('li');
    const liTotalQuestions = document.createElement('li');
    const returnToMainScreenButton = document.createElement('button');

    returnToMainScreenButton.innerText = 'Return';
    returnToMainScreenButton.classList.add('return-button')
    returnToMainScreenButton.addEventListener('click', () => {
        init();
    })

    if (fromLocalStorage) {
        const localStorageResults = JSON.parse(window.localStorage.getItem(topicName));

        let { correctAnswers, totalQuestions, incorrectAnswers, score } = localStorageResults;
        
    
        liCorrectAnswers.innerText = `Total correct answers: ${correctAnswers}`;
        liInCorrectAnswers.innerText = `Total incorrect answers: ${incorrectAnswers}`;
        liTotalScore.innerText = `Total score: ${score}`;
        liTotalQuestions.innerText = `Total questions: ${totalQuestions}`;
    

        render(ul, combineElements([liCorrectAnswers, liInCorrectAnswers, liTotalScore, liTotalQuestions, returnToMainScreenButton]));
        render(resultsContainer, combineElements([heading, ul]));

        return resultsContainer;
    } else {
        let correctAnswers = 0;
        let totalQuestions = data[currentTopicName].length;
        let score = 0;
        
        for (let i = 0; i < data[currentTopicName].length; i++) {
            if (data[currentTopicName][i].userAnswer === data[currentTopicName][i].answer) {
                correctAnswers += 1;
                score += 1;
            }
        }
    
        liCorrectAnswers.innerText = `Total correct answers: ${correctAnswers}`;
        liInCorrectAnswers.innerText = `Total incorrect answers: ${totalQuestions - correctAnswers}`;
        liTotalScore.innerText = `Total score: ${score}`;
        liTotalQuestions.innerText = `Total questions: ${totalQuestions}`;
    
        const resultsObject = {
            completed: true,
            correctAnswers,
            incorrectAnswers: totalQuestions - correctAnswers,
            score,
            totalQuestions
        }
    
        window.localStorage.setItem(currentTopicName, JSON.stringify(resultsObject));

        render(ul, combineElements([liCorrectAnswers, liInCorrectAnswers, liTotalScore, liTotalQuestions, returnToMainScreenButton]));
        render(resultsContainer, combineElements([heading, ul]));

        return resultsContainer;
    }
}