import './assets/styles/main.scss';
import { Row } from './assets/modules/row.js';
import {
  rowOne, rowTwo, rowThree, rowFour, rowFive
} from './assets/modules/variables.js';
import { trackKeystrokes } from './assets/modules/trackKeystrokes';

const BODY = document.body;

const wrapper = document.createElement('section');
wrapper.classList.add('wrapper');

const wrapperTitle = document.createElement('h1');
wrapperTitle.classList.add('wrapper__title');
wrapperTitle.innerHTML = 'Виртуальная клавиатура';
wrapper.append(wrapperTitle);

const wrapperText = document.createElement('textarea');
wrapperText.classList.add('wrapper__text');
wrapperText.id = 'textarea';
wrapperText.style.cols = '30';
wrapperText.style.rows = '10';
wrapper.append(wrapperText);

const virtualKeyboard = document.createElement('div');
virtualKeyboard.classList.add('virtual-keyboard');

let rows = [];
rows.push(rowOne);
rows.push(rowTwo);
rows.push(rowThree);
rows.push(rowFour);
rows.push(rowFive);

rows.forEach(row => {
  let newRow = new Row();
  newRow.fillElement(row);
  virtualKeyboard.append(newRow.getElement());
});

wrapper.append(virtualKeyboard);

const wrapperDescription = document.createElement('p');
wrapperDescription.classList.add('wrapper__description');
wrapperDescription.innerHTML = 'Клавиатура создана в операционной системе Windows';
wrapper.append(wrapperDescription);

const wrapperLanguage = document.createElement('p');
wrapperLanguage.classList.add('wrapper__language');
wrapperLanguage.innerHTML = 'Для переключения языка комбинация: левыe shift + alt';
wrapper.append(wrapperLanguage);

BODY.append(wrapper);

if (sessionStorage.length === 0) sessionStorage.setItem('layout', 'eng');
trackKeystrokes();
