import { inPage } from './pageState.js';
import header from './header.js';
import updateStatus from './updateStatus.js';

export default function menu() {

    // get state of the page
    const thePage = inPage.statePage.menu;
    const currentPage = 'menu';

    if (thePage == false) {

        // get main node reference: content 
        const content = document.getElementById('content');
        if (content.firstElementChild == true) {
            console.log(content.firstElementChild);
        }

        // const body = document.getElementsByTagName('body');
        // document.body.classList.toggle('body-back-ground');
        // document.body.style.backgroundColor = '#F2E0D0'




        // Change the status of all pages according
        // to the clicked one
        updateStatus(currentPage);


        return content
    }
} 

// document.body.appendChild(header());
