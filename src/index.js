

// The home function render the home nav 
function index() {

    // get state of the page
    const thePage = inPage.statePage.index;
    const currentPage = 'home'

    if (thePage === false) {


        // create center box inside a main tag
        const content = document.getElementById('content');


        const mainContent = document.createElement('main');
        mainContent.setAttribute('id', 'main-content');

        const imageNames = {'leaf1': image0, 'leaf2':image1, 'leaf3':image2,
                            'front1':image3, 'front2':image4 }; 

        // First image
        let counter = 0;
        for (const image in imageNames) {
            let div = document.createElement('div');
            div.setAttribute('class', `${image}`);
            let img = document.createElement('img');
            img.setAttribute('src', `${imageNames[image]}`);
            img.setAttribute('alt', `${image}`);
            img.setAttribute('class', `${image} image`);

            div.appendChild(img);
            mainContent.appendChild(div);
            content.appendChild(mainContent);
        }

        for (const eachState in inPage.statePage) {
            if (eachState == 'home') {
                inPage.statePage[eachState] = true;
            } else {
                inPage.statePage[eachState] = false;
            }
            console.log(`${eachState}: ${inPage.statePage[eachState]}`)
        }

        return content;
    
    }
}

export {
    index,
}

document.body.appendChild(header());
document.body.appendChild(index());

