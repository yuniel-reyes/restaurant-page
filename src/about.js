import {inPage} from './pageState.js';
import updatePage from './updatePage.js';
import updateStatus from './updateStatus.js';
import info from './img/info.svg';


export default function about() {
    

    // get state of the page
    const thePage = inPage.statePage.about;
    const currentPage = 'about'

    if (thePage === false) {

        // remove all content except headers
        updatePage();

        // get content node reference
        const content = document.getElementById('content');
        
        // Change background if comming from home
        const body = document.getElementsByTagName('body');
        if (body[0].classList.contains('body-back-ground')) {
            document.body.classList.toggle('body-back-ground');
            body[0].classList.toggle('menu-background');
        }
        
        // create node for text
        const textContainer = document.createElement('div');
        textContainer.setAttribute('id', 'about-text-container')
        const text1 = document.createElement('h1');
        const text2 = document.createElement('h1');
        text1.textContent = 'DO NO SAY MORE';
        text2.textContent = 'GRAB ONE CUP AND GET TO WORK';
        textContainer.appendChild(text1)
        textContainer.appendChild(text2)
        content.appendChild(textContainer);

        // BIG BRAND NAME
        const bigBrandName = document.createElement('div');
        const brandNameText = document.createElement('h1');
        bigBrandName.setAttribute('id','brand-name');
        brandNameText.textContent = 'DTIERRA';
        bigBrandName.appendChild(brandNameText);
        content.appendChild(bigBrandName);

        // TOOLTIP PROJECT INFO
        const toolTipContainer = document.createElement('div');
        toolTipContainer.setAttribute('class', 'tooltip-container');
        const tooltipIcon = document.createElement('img');
        tooltipIcon.setAttribute('class', 'tooltip-icon');
        tooltipIcon.setAttribute('src', info);
        const tooltipText = document.createElement('span');
        tooltipText.setAttribute('class', 'tooltip-text');
        tooltipText.textContent = 'This is a project for TOP';
        toolTipContainer.appendChild(tooltipIcon);
        toolTipContainer.appendChild(tooltipText);
        content.appendChild(toolTipContainer);
        

        // Change the status of all pages according
        // to the clicked one
        updateStatus(currentPage);

        return content;
    }

}