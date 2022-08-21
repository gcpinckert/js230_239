let mainHeader = document.querySelectorAll('header')[1];

document.body.insertAdjacentElement('afterbegin', mainHeader);

let mainH1 = document.querySelector('h1');

mainHeader.insertBefore(mainH1, mainHeader.querySelector('nav'));

let [babyMop, chinStick] = document.querySelectorAll('img'); 

let [chinStickFig, babyMopFig] = document.querySelectorAll('figure');

chinStickFig.insertAdjacentElement('afterbegin', chinStick);
babyMopFig.insertAdjacentElement('afterbegin', babyMop);

let article = document.querySelector('article');
article.insertAdjacentElement('beforeend', chinStickFig);
article.insertAdjacentElement('beforeend', babyMopFig);