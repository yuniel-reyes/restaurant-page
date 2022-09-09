export default function firstWhiteOverlay() {

    const content = document.getElementById('content');

    const whiteDiv = document.createElement('div');
    whiteDiv.setAttribute('class', 'white-div');

    const theCenterLogoContainer = document.createElement('div');
    theCenterLogoContainer.setAttribute('class', 'center-logo-container');

    theCenterLogoContainer.textContent = 'ONEc.'

    content.appendChild(theCenterLogoContainer);
    content.appendChild(whiteDiv);

    return content;
}