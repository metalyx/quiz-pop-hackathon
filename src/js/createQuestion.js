import data from '../data/dataset.json'

export default function createQuestion () {
    const p = document.createElement('p');

    if (!data[currentTopicName][currentTopicDataIndex]?.question) {
        throw new Error(`Data for topic with topicName ${currentTopicName} is not provided`);
    }
    
    p.innerText = `${data[currentTopicName][currentTopicDataIndex].question} \n(${currentTopicDataIndex + 1} of ${data[currentTopicName].length} questions)`;
    p.title = p.innerText;
    p.classList.add('unselectable');


    return p;
}