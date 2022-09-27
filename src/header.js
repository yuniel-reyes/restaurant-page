
export default function header() {
    
    const content = document.getElementById('content');

    // create header
    const theHeader = document.createElement('header');
    const navContainer = document.createElement('div');
    navContainer.setAttribute('class', 'nav-bar-container');
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'nav-bar');


    // Write..... 
    const NAVBAR = {
        'HOME': index,
        'MENU': menu,
        'ABOUT': about,
        'CONTACT': contact
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
    theHeader.appendChild(navContainer);
    content.appendChild(theHeader);

    return content;
}
