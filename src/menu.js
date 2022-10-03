import { inPage } from './pageState.js';
// import header from './header.js';
import updateStatus from './updateStatus.js';
import firstCup from './img/firstCup.svg';
import cupEffect from './cupEffect.js';

export default function menu() {

    // get state of the page
    const thePage = inPage.statePage.menu;
    const currentPage = 'menu';

    if (thePage == false) {

        // get main node reference: content 
        const content = document.getElementById('content');
        for (const eachChild of Array.from(content.children)) {
            // remove children not header
            if (eachChild.id.includes('header') == false) {
                eachChild.remove();
                // console.log(eachChild);
            }
        }

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


        // insert image: test
        const firstImg = document.createElement('div');
        firstImg.setAttribute('class', 'cup-container');
        const img = document.createElement('img');
        img.setAttribute('src', firstCup);
        img.setAttribute('class', 'coffee-cup');
        firstImg.appendChild(img)
        content.appendChild(firstImg);

        // the menu
        const COFFEES = ['AMERICANO', 'CAPPUCCINO','EXPRESSO', 
                        'MACCHIATO', 'FLAT WHITE', 'FRAPPE', 
                        'LATTE', 'MOCHA', 'AFFOGATO'];

        const menu = document.createElement('div');
        menu.setAttribute('class', 'the-menu');

        COFFEES.forEach(coffee => {
            const row = document.createElement('div');
            row.setAttribute('class', `${coffee} rows`);

            const spans = document.createElement('div');
            spans.setAttribute('class', 'spans');
            
            const data1 = document.createElement('span');
            data1.textContent = coffee;
            const data2 = document.createElement('span');
            data2.textContent = 'DTIERRA';
            const data3 = document.createElement('span');
            data3.textContent = 'zero calories'
            spans.appendChild(data1);
            spans.appendChild(data2);
            spans.appendChild(data3);
            spans.addEventListener('mouseover', cupEffect);
            row.appendChild(spans);

            const test = document.createElement('div');
            test.setAttribute('class', 'test')
            test.textContent = 'INSERT TEXT IN THE ROW WITH A MOVING TO THE LEFT EFFECT';
            row.appendChild(test);

            menu.appendChild(row);
        })
        content.appendChild(menu);



        // Change the status of all pages according
        // to the clicked one
        updateStatus(currentPage);

        return content
    }
} 

// document.body.appendChild(header());
