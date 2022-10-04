import {inPage} from './pageState.js';
import header from './header';
import updatePage from './updatePage.js';
import style from './style.css';
import updateStatus from './updateStatus.js';

// The index function render the home page 
function index() {

    // get state of the page
    const thePage = inPage.statePage.index;
    const currentPage = 'home'

    if (thePage === false) {


        const content = document.getElementById('content');
        document.body.setAttribute('class', 'body-back-ground');

        // remove all content except headers
        updatePage();

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


        // Change the status of all pages according
        // to the clicked one
        updateStatus(currentPage);

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

