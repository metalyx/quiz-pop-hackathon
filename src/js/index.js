import data from '../data/dataset.json';

const dataKeys = Object.keys(data);

let currentTopicName, curUserAnswer = null, currentTopicDataIndex = 0;

init();

function init () {

    if (data) {

        if (dataKeys.length <= 0) {
            throw new Error('Invalid data provided');
        }

        const fragment = document.createDocumentFragment();

        fragment.appendChild(getHeadingElement('Pick the topic'));
    
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

            fragment.appendChild(topic);
        }

        const quizContainer = document.getElementById('quiz-container');

        quizContainer.innerHTML = '';
        quizContainer.appendChild(fragment);
        addListenersForTopicsButtons();
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

function getHeadingElement (text, primary = true, success = false) {
    const heading = document.createElement('h1');
    heading.innerText = text;

    if (primary) {
        heading.classList.add('heading-primary');
        heading.classList.remove('heading-sucess');
    }
    if (success) {
        heading.classList.remove('heading-primary');
        heading.classList.add('heading-success');
    }

    return heading;
}

function clickTopicButton (topicName) {
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

function initTopic () {
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
    p.classList.add('unselectable')

    return p;
}

function createOptions() {
    const ul = document.createElement('ul');
    const options = data[currentTopicName][currentTopicDataIndex].options;
    const arrayOfLi = [];

    for (let i = 0; i < options.length; i++) {

        const li = document.createElement('li');

        li.classList.add('answer-option');
        li.innerText = options[i];

        if (data[currentTopicName][currentTopicDataIndex].userAnswer === li.innerText) {
            li.classList.add('chosen-answer');
        } else if (data[currentTopicName][currentTopicDataIndex].userAnswer) {
            li.classList.add('not-allowed');
        }

        li.addEventListener('click', (e) => chooseAnswer(e.target));

        arrayOfLi.push(li);
    }

    ul.appendChild(combineElements(arrayOfLi));
    ul.classList.add('option-list');

    return ul;
}

function chooseAnswer (clickedLiElement) {
    if (!data[currentTopicName][currentTopicDataIndex].userAnswer) {

        curUserAnswer = clickedLiElement.innerText;

        const existingOptions = document.getElementsByClassName('answer-option');

        for (let i = 0; i < existingOptions.length; i++) {
            if (existingOptions[i].isSameNode(clickedLiElement)) {
                clickedLiElement.classList.add('chosen-answer');
            } else {
                existingOptions[i].classList.remove('chosen-answer');
            }
        }
    }
}

function createControlls () {
    const controlls = document.createElement('div');
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');

    prevButton.innerText = '<';
    nextButton.innerText = '>';

    prevButton.classList.add('question-controlls-button');
    if (currentTopicDataIndex === 0) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }

    nextButton.classList.add('question-controlls-button');

    nextButton.addEventListener('click', () => {  
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
        }

        
        console.log('currentTopicDataIndex', currentTopicDataIndex)

        
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

function showResultsScreen (fromLocalStorage = false, topicName) {

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