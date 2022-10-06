import { inPage } from './pageState.js';
import updatePage from './updatePage.js';
import updateStatus from './updateStatus.js';
import cupEffectIn from './cupEffectIn.js';
import cupEffectOut from './cupEffectOut.js'
import sugarFree from './img/sugarFree.svg';
import lowCalories from './img/lowCalories.svg';
import bio from './img/bio.svg';

// import cups images
import AMERICANO from './img/americano.svg';
import CAPPUCCINO from './img/cappuccino.svg';
import MACCHIATO from './img/macchiato.svg';
import EXPRESSO from './img/expresso.svg';
import FLATWHITE from './img/flatWhite.svg';
import MOCHA from './img/mocha.svg';
import LATTE from './img/latte.svg';



export default function menu() {

    // get state of the page
    const thePage = inPage.statePage.menu;
    const currentPage = 'menu';

    if (thePage == false) {

        // get main node reference: content 
        const content = document.getElementById('content');

        // remove all content except headers
        updatePage();

        // Change background
        const body = document.getElementsByTagName('body');
        document.body.classList.toggle('body-back-ground');
        document.body.classList.toggle('menu-background');


        // Lets create the menu
        // Create border-radius effect: first
        const theMenuOne = document.createElement('div')
        theMenuOne.setAttribute('id', 'the-menu-first-div');
        const firstDiv = document.createElement('div');
        firstDiv.setAttribute('class', 'first-div-box');
        theMenuOne.appendChild(firstDiv)
        content.appendChild(theMenuOne);
        
        // Create border-radius effect: second
        const theMenuTwo = document.createElement('div');
        theMenuTwo.setAttribute('id', 'the-menu-second-div');
        const secondDiv = document.createElement('div');
        secondDiv.setAttribute('class', 'second-div-box');
        theMenuTwo.appendChild(secondDiv);
        content.appendChild(theMenuTwo);

        // the menu
        const COFFEES = {'AMERICANO': "SOME FRESH HOT WATER AND A DOUBLE EXPRESSO ON TOP. YOU'RE READY TO GO!",
                         'CAPPUCCINO':'A LAYER OF FOAM COMBINED WITH WARMING MILK AND A BREWED EXPRESSO. YUMMY!',
                         'EXPRESSO': 'A SMALL, STRONG DRINK MADE USING GROUND COFFEE UNDER HIGH WATER PRESSURE', 
                         'MACCHIATO': 'AN EXPRESSO WITH A SMALL AMOUNT OF FOAMED MILK. DELICIOUS, HMMM!', 
                         'FLATWHITE': 'A SMALL, STRONG LATTE WITH A TOUCH OF LATTE ART.  ART AND COFFEE',
                         'LATTE': 'MORE MILK, LESS FOAM AND COFFEE. MORE MILK, LESS FOAM AND COFFEE. READY? GO!', 
                         'MOCHA': 'A CHOCOLATE-FLAVOURED COFFEE. YES, A CHOCOLATE-FLAVOURED COFFEE. GO NOW!',};

        const images = {
            'AMERICANO': AMERICANO,
            'CAPPUCCINO': CAPPUCCINO,
            'MACCHIATO': MACCHIATO,
            'EXPRESSO': EXPRESSO,
            'FLATWHITE': FLATWHITE,
            'MOCHA': MOCHA, 
            'LATTE': LATTE, 
        }

        // THE MENU
        const menu = document.createElement('div');
        menu.setAttribute('class', 'the-menu');

        for (const eachCoffe in COFFEES) {
            const row = document.createElement('div');
            row.setAttribute('class', `${eachCoffe} rows`);
            row.addEventListener('mouseenter', cupEffectIn);
            row.addEventListener('mouseleave', cupEffectOut);

            const spans = document.createElement('div');
            spans.setAttribute('class', 'spans');
            
            const data1 = document.createElement('span');
            data1.textContent = eachCoffe;
            const data2 = document.createElement('span');
            data2.textContent = 'DTIERRA';

            // badge images
            const data3 = document.createElement('div');
            data3.setAttribute('class', 'data3');
            const img1 = document.createElement('img');
            const img2 = document.createElement('img');
            const img3 = document.createElement('img');
            img1.setAttribute('src', sugarFree);
            img2.setAttribute('src', lowCalories);
            img3.setAttribute('src', bio);
            img1.setAttribute('class', 'sugar-free');
            img2.setAttribute('class', 'low-calories');
            img3.setAttribute('class', 'bio');
            data3.appendChild(img1);
            data3.appendChild(img2);
            data3.appendChild(img3);
            spans.appendChild(data1);
            spans.appendChild(data2);
            spans.appendChild(data3);
            row.appendChild(spans);

            // RUNNING TEXT
            const runningTextContainer = document.createElement('div');
            runningTextContainer.setAttribute('class', 'test');
            // runningTextContainer.addEventListener('mouseleave', cupEffectOut);

            const runnText1 = document.createElement('span');
            runnText1.setAttribute('class', 'runn-text-1');
            const runnText2 = document.createElement('span')
            runnText2.setAttribute('class', 'runn-text-2')
            runnText1.textContent = COFFEES[eachCoffe];
            runnText2.textContent = COFFEES[eachCoffe];
            runningTextContainer.appendChild(runnText1);
            runningTextContainer.appendChild(runnText2);

            row.appendChild(runningTextContainer);

            menu.appendChild(row);
        }
        content.appendChild(menu);


        // THE IMAGES FOR CUP EFFECT
        const imgBigContainer = document.createElement('div');
        imgBigContainer.setAttribute('class', 'img-container');
        for (const eachImage in images) {
            const imgEachContainer = document.createElement('div');
            imgEachContainer.setAttribute('class', `each-img-container${eachImage}`);
            const img = document.createElement('img');
            img.setAttribute('src', images[eachImage]);
            img.setAttribute('class', `the${eachImage}`);
            imgEachContainer.appendChild(img);
            imgBigContainer.appendChild(imgEachContainer);                              
        }
        content.appendChild(imgBigContainer);

        // the list for the steam
        const steamListContainer = document.createElement('div');
        steamListContainer.setAttribute('class', 'list-container');
        const steamList = document.createElement('ul')
        for (let counter = 0; counter < 2; counter++) {
            const listItem = document.createElement('li');
            listItem.setAttribute('class', 'steam-list-item')
            steamList.appendChild(listItem);
        } 
        steamListContainer.appendChild(steamList);
        content.appendChild(steamListContainer);

        // Change the status of all pages according
        // to the clicked one
        updateStatus(currentPage);

        return content
    }
} 
