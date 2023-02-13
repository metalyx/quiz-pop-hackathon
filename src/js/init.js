import data from '../data/dataset.json';
import getHeadingElement from './getHeadingElement';
import render from './render';
import addListenersForTopicsButtons from './addListenersForTopicsButtons';

export default function init () {
    if (data) {

        const fragment = document.createDocumentFragment();

        fragment.appendChild(getHeadingElement('Pick the topic'));

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('topic-buttons-container');

        const dataKeys = Object.keys(data);
    
        for (let i = 0; i < dataKeys.length; i++) {
            const topic = document.createElement('button');     

            topic.innerText = dataKeys[i].toUpperCase();
            topic.classList.add('topic-button');
            topic.dataset.topicName = dataKeys[i];

            const localStorageTopicData = JSON.parse(window.localStorage.getItem(dataKeys[i]));

            if (localStorageTopicData?.completed) {
                topic.classList.add('solved');
            } else {
                topic.classList.remove('solved');
            }

            buttonsContainer.appendChild(topic);
        }

        fragment.appendChild(buttonsContainer);

        const quizContainer = document.getElementById('quiz-container');

        render(quizContainer, fragment);
        addListenersForTopicsButtons();
    } else {
        throw new Error('Container not found in the DOM tree, or data cannot be fetched')
    }
}
