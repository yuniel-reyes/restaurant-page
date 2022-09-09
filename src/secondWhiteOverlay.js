export default function secondWhiteOverlay() {

    const content = document.getElementById('content');

    const whiteDiv = document.createElement('div');
    whiteDiv.setAttribute('class', 'white-div-second');
    content.appendChild(whiteDiv);

    return content;
}