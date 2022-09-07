export default function header() {
    
    const content = document.getElementById('content');

    // create header
    const theHeader = document.createElement('header');
    const navContainer = document.createElement('div');
    navContainer.setAttribute('class', 'nav-bar-container');
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'nav-bar');

    const NAVBAR = ['MENU', 'ABOUT', 'CONTACT'];
    // Create li items and put them inside the ul
    for (let itemCount = 0; itemCount < 3; itemCount++){
        let li = document.createElement('li');
        li.setAttribute('class', `nav-item ${itemCount}`);
        li.textContent = NAVBAR[itemCount];
        ul.appendChild(li);
    }

    navContainer.appendChild(ul);
    theHeader.appendChild(navContainer);
    content.appendChild(theHeader);

    return content;
}