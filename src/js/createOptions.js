import chooseAnswer from "./chooseAnswer";
import data from '../data/dataset.json'
import combineElements from "./combineElements";

export default function createOptions() {
    const ul = document.createElement('ul');
    const options = data[currentTopicName][currentTopicDataIndex]?.options;

    if (!options) {
        throw new Error(`Data for topic with topicName ${currentTopicName} is not provided`);
    }

    const arrayOfLi = [];

    for (let i = 0; i < options.length; i++) {
        const input = document.createElement('input');
        input.classList.add('option');
        input.setAttribute('type', 'radio');
        input.tabIndex = 0;
        input.setAttribute('name', 'answer');
        input.setAttribute('id', options[i]);

        const label = document.createElement('label');
        label.innerText = options[i];
        label.setAttribute('for', options[i]);

        const li = document.createElement('li');
        li.appendChild(input);
        li.appendChild(label);


        if (data[currentTopicName][currentTopicDataIndex].userAnswer === label.innerText) {
            li.classList.add('chosen-answer');
            input.setAttribute('checked', true)
        } else if (data[currentTopicName][currentTopicDataIndex].userAnswer) {
            li.classList.add('not-allowed');
            input.setAttribute('disabled', true)
        }

        input.addEventListener('click', (e) => chooseAnswer(e.target));

        arrayOfLi.push(li);
    }

    ul.appendChild(combineElements(arrayOfLi));
    ul.classList.add('option-list');

    return ul;
}
