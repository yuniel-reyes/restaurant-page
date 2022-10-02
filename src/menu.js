import { inPage } from './pageState.js';
// import header from './header.js';
import updateStatus from './updateStatus.js';
import firstCup from './img/firstCup.svg';

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

        const menuTable = document.createElement('table');
        // const tableBody = document.createElement('tbody');

        COFFEES.forEach(coffee => {
            const row = document.createElement('tr');
            const data1 = document.createElement('td');
            data1.textContent = coffee;
            const data2 = document.createElement('td');
            data2.textContent = 'DTIERRA';
            const data3 = document.createElement('td');
            data3.textContent = 'zero calories'
            row.appendChild(data1);
            row.appendChild(data2);
            row.appendChild(data3);
            menuTable.appendChild(row);
            // content.appendChild(tableBody);
        })
        // menuTable.appendChild(tableBody);        
        content.appendChild(menuTable);



        // Change the status of all pages according
        // to the clicked one
        updateStatus(currentPage);

        return content
    }
} 

// document.body.appendChild(header());
