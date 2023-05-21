import image from './assets/javascript.jpg';
import './index.css';

console.log('Hello World!');

const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';
document.body.append(h1);

const img = document.createElement('img');
img.setAttribute('src', image);
document.body.append(img);


// https://github.com/Morfielm/rollup zadanie 1