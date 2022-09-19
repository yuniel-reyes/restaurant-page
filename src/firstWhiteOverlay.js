import drop from './img/drop.svg';

export default function firstWhiteOverlay() {

    const content = document.getElementById('content');

    //check if the all-container exists 
    let overlayContainer = document.querySelector('.all-container');
    if (overlayContainer == null) {
        overlayContainer = document.createElement('div');
        overlayContainer.setAttribute('class', 'all-container');    
    }     

    const firstOverlay = document.createElement('div');
    firstOverlay.setAttribute('class', 'first-overlay');

    const whiteDiv = document.createElement('div');
    whiteDiv.setAttribute('class', 'white-div');

    const theCenterLogoContainer = document.createElement('div');
    theCenterLogoContainer.setAttribute('class', 'center-logo-container');

    const theLogo = document.createElement('img');
    theLogo.setAttribute('src', drop);
    theLogo.setAttribute('alt', 'web-logo');
    theLogo.setAttribute('class', 'the-logo');
    theCenterLogoContainer.appendChild(theLogo);
    firstOverlay.appendChild(whiteDiv);
    firstOverlay.appendChild(theCenterLogoContainer);
    overlayContainer.appendChild(firstOverlay);
    content.appendChild(overlayContainer);

    setTimeout(() => {
        firstOverlay.remove();
    }, 4000)

    return content;
}