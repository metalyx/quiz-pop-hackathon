import data from '../data/dataset.json'

export default function chooseAnswer (checkedInput) {
    if (!data[currentTopicName][currentTopicDataIndex].userAnswer) {
        curUserAnswer = checkedInput.getAttribute('id');

        const options = document.getElementsByClassName('option');

        for (let i = 0; i < options.length; i++) {
            if (options[i].isSameNode(checkedInput)) {
                checkedInput.classList.add('chosen-option');
            } else {
                options[i].classList.remove('chosen-option');
            }
        }
    }
}
