import { data } from './data.js';

function createCardTitle(src) {
    let title = document.createElement('h5');
    let titleText = document.createTextNode(src);
    title.appendChild(titleText);
    title.classList.add('card-title');

    return title;
}
function createCardDesc(src) {
    let para = document.createElement('p');
    let paraText = document.createTextNode(src);
    para.appendChild(paraText);
    para.classList.add('card-text');
    return para;
}

function createCardPrice(src) {
    let para = document.createElement('p');
    let paraText = document.createTextNode(src);
    para.appendChild(paraText);
    para.classList.add('card-text');
    return para;
}

function createCardList(src) {
    let listArray = [];
    src.map((element) => {
        let listItem = document.createElement('li');
        let listItemText = document.createTextNode(element);
        listItem.appendChild(listItemText);
        listItem.classList.add('list-group-item');
        listArray.push(listItem);
    });
    return listArray;
}

function createCard(element) {
    let cardNo;
    switch (element.title) {
        case 'Personal':
            cardNo = 'cardOne';
            break;
        case 'Pro':
            cardNo = 'cardTwo';
            break;
        case 'Enterprise':
            cardNo = 'cardThree';
            break;
        default:
            break;
    }

    let card = document.getElementById(cardNo);
    let container = document.createElement('div');
    container.classList.add('card-body');
    card.appendChild(container);
    let title = createCardTitle(element.title);
    container.appendChild(title);
    let para = createCardDesc(element.description);
    container.appendChild(para);
    let price = createCardPrice(element.price);
    container.appendChild(price);
    let listContainer = document.createElement('ul');
    listContainer.classList.add('list-group');
    listContainer.classList.add('list-group=flush');
    container.appendChild(listContainer);
    let listItems = createCardList(element.items);
    listItems.map((element) => {
        listContainer.appendChild(element);
    });
}

if (data) {
    console.log("let's go");
    data.map((element) => {
        createCard(element);
    });
}
