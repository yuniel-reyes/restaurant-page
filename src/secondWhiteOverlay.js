// import drop from './img/drop.svg';

export default function secondWhiteOverlay(currentPage) {

    const overlayContainer = document.querySelector('.all-container');

    const secondOverlay = document.createElement('div');
    secondOverlay.setAttribute('class', 'second-overlay');
    overlayContainer.appendChild(secondOverlay);
    
    // remove first white-div
    setTimeout(() => {
        const removableContent = document.querySelector('.removable-content');
        while (removableContent.firstElementChild) {
            // the currentPage will be passed from the changePage function
            // it define the nav that was clicked
            if (removableContent.firstElementChild.className.includes(currentPage) == false) {
                console.log(removableContent.firstElementChild.className);
                removableContent.firstElementChild.remove();
            } else {
                break;
            }
        }
    }, 4000)

    return overlayContainer;
}