export default function combineElements (elements) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < elements.length; i++) {
        fragment.appendChild(elements[i]);
    }

    return fragment;
}
