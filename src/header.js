import { changePage } from './index.js';

function header() {
    
    const content = document.getElementById('content');

    // create header
    const theHeader = document.createElement('header');
    const navContainer = document.createElement('div');
    navContainer.setAttribute('class', 'nav-bar-container');
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'nav-bar');

    const NAVBAR = ['HOME','MENU', 'ABOUT', 'CONTACT'];
    // Create li items and put them inside the ul
    for (let itemCount = 0; itemCount < 4; itemCount++){
        let li = document.createElement('li');
        li.setAttribute('class', `nav-item ${itemCount}`);
        // li.textContent = NAVBAR[itemCount];
        let link = document.createElement('a');
        // link.setAttribute('href', '#');
        link.textContent = NAVBAR[itemCount];
        link.onclick = changePage;
        li.appendChild(link);
        ul.appendChild(li);
    }

    navContainer.appendChild(ul);
    theHeader.appendChild(navContainer);
    content.appendChild(theHeader);

    return content;
}

export {
    header,
}