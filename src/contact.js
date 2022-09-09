export default function contact() {

    const content = document.getElementById('content');
    
    const theContact = document.createElement('div');
    theContact.setAttribute('class', 'the-contact');

    // background-image
    const h1 = document.createElement('h1');
    h1.textContent = 'reyesdevpro@gmail.com!';
    theContact.appendChild(h1);
    content.appendChild(theContact);

    return content;

}