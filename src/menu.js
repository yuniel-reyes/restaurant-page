import { inPage } from './pageState.js';
import updatePage from './updatePage.js';
import updateStatus from './updateStatus.js';
import cupEffect from './cupEffect.js';
import sugarFree from './img/sugarFree.svg';
import lowCalories from './img/lowCalories.svg';
import bio from './img/bio.svg';

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
                         'FLAT WHITE': 'A SMALL, STRONG LATTE WITH A TOUCH OF LATTE ART.  ART AND COFFEE',
                         'LATTE': 'MORE MILK, LESS FOAM AND COFFEE. MORE MILK, LESS FOAM AND COFFEE. READY? GO!', 
                         'MOCHA': 'A CHOCOLATE-FLAVOURED COFFEE. YES, A CHOCOLATE-FLAVOURED COFFEE. GO NOW!',};

        const menu = document.createElement('div');
        menu.setAttribute('class', 'the-menu');

        for (const eachCoffe in COFFEES) {
            const row = document.createElement('div');
            row.setAttribute('class', `${eachCoffe} rows`);

            const spans = document.createElement('div');
            spans.setAttribute('class', 'spans');
            
            const data1 = document.createElement('span');
            data1.textContent = eachCoffe;
            const data2 = document.createElement('span');
            data2.textContent = 'DTIERRA';

            // images
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
            spans.addEventListener('mouseover', cupEffect);
            row.appendChild(spans);

            // RUNNING TEXT
            const runningTextContainer = document.createElement('div');
            runningTextContainer.setAttribute('class', 'test');
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

        // Change the status of all pages according
        // to the clicked one
        updateStatus(currentPage);

        return content
    }
} 
