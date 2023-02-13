import data from '../data/dataset.json' 
import render from "./render";
import showResultsScreen from './showResultsScreen';
import initTopic from './initTopic';

export default function clickTopicButton (topicName) {
    if (JSON.parse(window.localStorage.getItem(topicName))?.completed) {
        const quizContainer = document.getElementById('quiz-container')
        render(quizContainer, showResultsScreen(true, topicName))
    } else {
        const topicData = data[topicName];

        if (topicData) {
            currentTopicName = topicName;
            currentTopicDataIndex = 0;
            initTopic();
        } else {
            throw new Error('No such topic were found...')
        }
    }
}