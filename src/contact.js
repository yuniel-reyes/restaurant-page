import { changePage } from "./change.js";
import { inPage } from "./pageState.js";

export default function contact() {

    // Get reference of the state of the page the user is trying
    // to access
    const thePage = inPage.statePage.contact;
    const currentPage = 'contact'

    if (thePage === false) {

        // run the overlay effect
        changePage(currentPage); // pass the called page

        const content = document.getElementById('content');
        const removableContent = document.querySelector('.removable-content');

        const theContact = document.createElement('div');
        theContact.setAttribute('class', 'the-contact');
    
        // background-image
        const h1 = document.createElement('h1');
        h1.textContent = 'reyesdevpro@gmail.com';
        theContact.appendChild(h1);
        removableContent.appendChild(theContact);
        content.appendChild(removableContent);
        // see the zIndex value

        
        for (const eachState in inPage.statePage) {
            if (eachState == 'contact') {
                inPage.statePage[eachState] = true;
            } else {
                inPage.statePage[eachState] = false;
            }
        }

        return content;
    }
}