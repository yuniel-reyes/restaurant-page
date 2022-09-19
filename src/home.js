import { changePage } from './change';
import { inPage } from './index.js';
import cinnamon from './img/cinnamon.svg';

export default function home() {

    const thePage = inPage.statePage.home;
    const currentPage = 'home'


    if (thePage === false) {
        
        changePage(currentPage); // pass the called page
    
        // const content = document.getElementById('content');
        
        // const theHome = document.createElement('div');
        // theHome.setAttribute('class', 'the-home to-remove');
    
        // // background-image
        // const h1 = document.createElement('h1');
        // h1.textContent = 'One Coffee!';
        // h1.setAttribute('class', 'back-img-text')
        // theHome.appendChild(h1);
        // content.appendChild(theHome);
    
        // update the state of each page
        for (const eachState in inPage.statePage) {
            if (eachState == 'home') {
                inPage.statePage[eachState] = true;
            } else {
                inPage.statePage[eachState] = false;
            }
            console.log(`${eachState}: ${inPage.statePage[eachState]}`)
        }
    }
    return content;
}