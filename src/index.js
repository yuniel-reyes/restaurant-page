import header from './header';
import './style.css';
import image1 from './img/firstImg.svg';
import image2 from './img/secondImg.svg';
import image3 from './img/thirdImg.svg';
import home from './home';

//  Keep track of the current page
const inPage = (() => {

    return {
        statePage: {
            'home': false,
            'menu': false,
            'about': false,
            'contact': false,
        }
    }
})();


// The index function load the first view: plants and 
//  ONE COFFEE hero text
function index() {


    
    // create center box inside a main tag
    const content = document.getElementById('content');


    const mainContent = document.createElement('main');
    mainContent.setAttribute('id', 'main-content immovable')

    // First image
    const divImg1Container = document.createElement('div');
    divImg1Container.setAttribute('class', 'first-img container')
    // divImg1Container.textContent = 'Hi, there';
    const firstImage = document.createElement('img');
    firstImage.setAttribute('src', image1);
    firstImage.setAttribute('alt', 'coffee-plant');
    firstImage.setAttribute('class', 'first-img-img');

    divImg1Container.appendChild(firstImage);
    mainContent.appendChild(divImg1Container);
    content.appendChild(mainContent);

    // Second image
    const divImg2Container = document.createElement('div');
    divImg2Container.setAttribute('class', 'second-img container');
    const secondImage = document.createElement('img');
    secondImage.setAttribute('src', image2);
    secondImage.setAttribute('alt', 'coffee-plan');
    secondImage.setAttribute('class', 'second-img-img');

    divImg2Container.appendChild(secondImage);
    mainContent.appendChild(divImg2Container);
    content.appendChild(mainContent);

    // Third image
    const divImg3Container = document.createElement('div');
    divImg3Container.setAttribute('class', 'third-img container');
    const thirdImage = document.createElement('img');
    thirdImage.setAttribute('src', image3);
    thirdImage.setAttribute('alt', 'coffee-plan');
    thirdImage.setAttribute('class', 'third-img-img');

    divImg3Container.appendChild(thirdImage);
    mainContent.appendChild(divImg3Container);
    content.appendChild(mainContent);

    // Removable content
    const removableContent = document.createElement('section');
    removableContent.setAttribute('class', 'removable-content')

    const backImage = document.createElement('div');
    backImage.setAttribute('class', 'back-image');
    const h1 = document.createElement('h1');
    h1.setAttribute('class', 'back-img-text')
    h1.textContent = 'One Coffee!';
    backImage.appendChild(h1);
    removableContent.appendChild(backImage);
    content.appendChild(removableContent);

    return content;
}


// Export inPage IIFE 
export {
    inPage
}

document.body.appendChild(header());
document.body.appendChild(index());
// document.body.appendChild(home());
