import clickTopicButton from "./clickTopicButton";

export default function addListenersForTopicsButtons () {
    const topicsButtons = document.getElementsByClassName('topic-button');

    if (topicsButtons.length <= 0) {
        throw new Error('No topics buttons were found...')
    }

    for (let i = 0; i < topicsButtons.length; i++) {
        topicsButtons[i].addEventListener('click', (e) => clickTopicButton(e.target.dataset.topicName));
    }
}
