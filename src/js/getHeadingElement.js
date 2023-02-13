export default function getHeadingElement (text, primary = true, success = false) {
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
