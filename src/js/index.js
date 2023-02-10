import data from '../data/dataset.json';

const topicsContainer = document.getElementById('topics-container');
console.log();

if (data && topicsContainer) {
    let dataKeys = Object.keys(data);

    if (dataKeys.length <= 0) {
        throw new Error('Invalid data provided')
    }

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < dataKeys.length; i++) {
        const topic = document.createElement('button');
        
        topic.innerText = dataKeys[i].toUpperCase();
        topic.classList.add('transition-all', 'bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');

        fragment.appendChild(topic);
    }

    topicsContainer.innerHTML = '';
    topicsContainer.appendChild(fragment)

} else {
    throw new Error('Container not found in the DOM tree, or data cannot be fetched')
}
