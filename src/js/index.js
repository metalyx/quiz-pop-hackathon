import data from '../data/dataset.json';

const topicsContainer = document.getElementById('topics-container');
const dataKeys = Object.keys(data);

let currentTopicName, currentTopicDataIndex = 0;

init();
addListenersForTopicsButtons();

function init () {
    if (data && topicsContainer) {
    
        if (dataKeys.length <= 0) {
            throw new Error('Invalid data provided');
        }
    
        const fragment = document.createDocumentFragment();
    
        for (let i = 0; i < dataKeys.length; i++) {
            const topic = document.createElement('button');
            
            // Check if topic already solved 

            topic.innerText = dataKeys[i].toUpperCase();
            topic.classList.add('topic-button');
            topic.dataset.topicName = dataKeys[i];
    
            fragment.appendChild(topic);
        }
    
        topicsContainer.innerHTML = '';
        topicsContainer.appendChild(fragment)
    
    } else {
        throw new Error('Container not found in the DOM tree, or data cannot be fetched')
    }
}

function addListenersForTopicsButtons () {
    const topicsButtons = document.getElementsByClassName('topic-button');

    if (topicsButtons.length <= 0) {
        throw new Error('No topics buttons were found...')
    }

    for (let i = 0; i < topicsButtons.length; i++) {
        topicsButtons[i].addEventListener('click', (e) => clickTopicButton(e.target.dataset.topicName));
    }
}

function clickTopicButton (topicName) {
    const topicData = data[topicName];

    if (topicData) {
        currentTopicName = topicName;
        currentTopicDataIndex = 0;
        initTopic();
    } else {
        throw new Error('No such topic were found...')
    }
}

function initTopic () {
    const quizContainer = document.getElementById('quiz-container');
    
    const topicContainer = document.createElement('div');
    topicContainer.classList.add('topic-container');

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
    

    // render(topicContainer, combineElements([questionContainer, optionsContainer, controllsContainer]));
    // render(quizContainer, topicContainer);
    render(quizContainer, combineElements([questionContainer, optionsContainer, controllsContainer]));
}

function getTask () {
    console.log('getTask', 'index: ', currentTopicDataIndex)

    return {
        questionP: createQuestion(),
        optionsUl: createOptions(),
        controlls: createControlls(),
    }
}

function createQuestion () {
    const p = document.createElement('p');
    
    p.innerText = data[currentTopicName][currentTopicDataIndex].question;

    return p;
}

function createOptions() {
    const ul = document.createElement('ul');
    const options = data[currentTopicName][currentTopicDataIndex].options;
    const arrayOfLi = [];

    for (let i = 0; i < options.length; i++) {
        // add logic to maintain already chosen answers

        const li = document.createElement('li');
        li.classList.add('answer-option');
        li.innerText = options[i];
        arrayOfLi.push(li);
    }

    ul.appendChild(combineElements(arrayOfLi));
    ul.classList.add('option-list');

    return ul;
}

function createControlls () {
    const controlls = document.createElement('div');
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');

    prevButton.innerText = '<';
    nextButton.innerText = '>';

    prevButton.classList.add('question-controlls-button');
    nextButton.classList.add('question-controlls-button');

    nextButton.addEventListener('click', () => {
        if (currentTopicDataIndex === data[currentTopicName].length - 1) {
            // Submit test + add info to local storage
            // ...

            init();
        } else {
            currentTopicDataIndex += 1;
            initTopic();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentTopicDataIndex !== 0) {
            currentTopicDataIndex -= 1;
            initTopic();
        }
    });

    controlls.appendChild(combineElements([prevButton, nextButton]));
    return controlls;
}

function render (target, content) {
    target.innerHTML = '';

    target.appendChild(content);
}

function combineElements (elements) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < elements.length; i++) {
        fragment.appendChild(elements[i]);
    }

    return fragment;
}