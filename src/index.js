import _ from 'lodash';

function component() {
    
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hi', 'Yuniel!'], ' ');

    return element;
}

document.body.appendChild(component());