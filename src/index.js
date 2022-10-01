import {inPage} from './pageState.js';
import header from './header';
import style from './style.css';
import updateStatus from './updateStatus.js';
// import background from './img/background.jpg';

// The home function render the home nav 
function index() {

    // get state of the page
    const thePage = inPage.statePage.index;
    const currentPage = 'home'

    if (thePage === false) {


        const content = document.getElementById('content');
        document.body.setAttribute('class', 'body-back-ground');

        const theHome = document.createElement('main');
        theHome.setAttribute('id', 'the-home');

        // 1 HERO TEXT
        const firstHeroText = document.createElement('h1');
        firstHeroText.setAttribute('id', 'first-hero');
        firstHeroText.textContent = 'ONE CUP FOR THE GO IN SEARCH OF DREAMS';

        // 2 HERO TEXT
        const secondHeroTextContainer = document.createElement('div');
        secondHeroTextContainer.setAttribute('id', 'second-hero');
        secondHeroTextContainer.innerHTML = '<h1><span>Dtierra</span>' + ' OFFERS ONE CUP TO GO. STAY JUST ENOUGH TIME BEFORE YOU GO IN SEARCH OF YOUR DREAMS.</h1>'


        // BIG BRAND NAME
        const bigBrandName = document.createElement('div');
        const brandNameText = document.createElement('h1');
        bigBrandName.setAttribute('id','brand-name');
        brandNameText.textContent = 'DTIERRA';
        bigBrandName.appendChild(brandNameText);

        // const imageNames = {'leaf1': image0, 'leaf2':image1, 'leaf3':image2,
        //                     'front1':image3, 'front2':image4 }; 

        // First image
        // let counter = 0;
        // for (const image in imageNames) {
        //     let div = document.createElement('div');
        //     div.setAttribute('class', `${image}`);
        //     let img = document.createElement('img');
        //     img.setAttribute('src', `${imageNames[image]}`);
        //     img.setAttribute('alt', `${image}`);
        //     img.setAttribute('class', `${image} image`);

        //     div.appendChild(img);
        //     mainContent.appendChild(div);
        //     content.appendChild(mainContent);
        // }

        // Change the status of all pages according
        // to the clicked one
        updateStatus(currentPage);
        // for (const eachState in inPage.statePage) {
        //     if (eachState == 'home') {
        //         inPage.statePage[eachState] = true;
        //     } else {
        //         inPage.statePage[eachState] = false;
        //     }
        // }

        theHome.appendChild(firstHeroText);
        theHome.appendChild(secondHeroTextContainer);
        content.appendChild(theHome);
        content.appendChild(bigBrandName)

        return content;
    
    }
}

export {
    index,
}

document.body.appendChild(header());
document.body.appendChild(index());

