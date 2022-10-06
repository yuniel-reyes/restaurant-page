import { index } from "./index.js";
import drop from './img/drop.svg'
import menu from './menu.js';
import about from './about.js';


export default function header() {
    
    const content = document.getElementById('content');

    // insert logo
    const theLogoPlusBrandContainer = document.createElement('div');
    theLogoPlusBrandContainer.setAttribute('id', 'logo-plus-brand')

    // Logo image container
    const logoImgContainer = document.createElement('img');
    logoImgContainer.setAttribute('src', drop);
    logoImgContainer.setAttribute('id', 'the-logo')

    // Brand name
    const theBrandName = document.createElement('h1');
    theBrandName.textContent = 'Dtierra';

    // Insert Logo and Brand
    theLogoPlusBrandContainer.appendChild(logoImgContainer);
    theLogoPlusBrandContainer.appendChild(theBrandName);


    // create header 1 for logo and brand
    const theHeader1 = document.createElement('header');
    theHeader1.setAttribute('id', 'header-1');
    theHeader1.appendChild(theLogoPlusBrandContainer);

    // create header 2 for menu
    const theHeader2 = document.createElement('header');
    theHeader2.setAttribute('id', 'header-2');
    const navContainer = document.createElement('div');
    navContainer.setAttribute('class', 'nav-bar-container');
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'nav-bar');
    theHeader2.appendChild(navContainer);



    // Write..... 
    const NAVBAR = {
        'HOME': index,
        'MENU': menu,
        'ABOUT': about,
    };
    // Create li items and put them inside the ul
    for (const eachOption in NAVBAR) {
        let li = document.createElement('li');
        li.setAttribute('class', `nav-item ${eachOption}`);
        // li.textContent = NAVBAR[itemCount];
        let link = document.createElement('a');
        link.textContent = eachOption;
        link.onclick = NAVBAR[eachOption];
        li.appendChild(link);
        ul.appendChild(li);
    }

    navContainer.appendChild(ul);
    theHeader2.appendChild(navContainer);
    content.appendChild(theHeader1);
    content.appendChild(theHeader2);

    return content;
}
