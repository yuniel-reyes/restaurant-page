import { header } from './header';
import './style.css';
import home from './home.js'

const changePage = () => {
    const content = document.getElementById('content');



    const whiteDiv = document.createElement('div');
    whiteDiv.setAttribute('class', 'white-div');

    const theCenterLogoContainer = document.createElement('div');
    theCenterLogoContainer.setAttribute('class', 'center-logo-container');

    theCenterLogoContainer.textContent = 'ONEc.'

    // whiteDiv.appendChild(theCenterLogoContainer);


    content.appendChild(theCenterLogoContainer);
    content.appendChild(whiteDiv);



    return content;

}

// const centerLogo = () => {
//     const theWhiteDiv = document.querySelector('.white-div');

//     const theCenterLogoContainer = document.createElement('div');
//     theCenterLogoContainer.setAttribute('class', 'center-logo-container');
//     const theCenterLogo = document.createElement('h1');
//     theCenterLogo.textContent = 'OneC.';
//     theCenterLogoContainer.appendChild(theCenterLogo);

//     theWhiteDiv.appendChild(theCenterLogoContainer);


    
// }

export {
    changePage,
}

document.body.appendChild(header());
document.body.appendChild(home());
