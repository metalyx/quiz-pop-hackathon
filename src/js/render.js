export default function render (target, content) {
    target.innerHTML = '';

    target.appendChild(content);
}
