import './index.html'
import { multt, sum } from './modules/check';
import './style.scss'
import imgg from './img/photo_2022-06-03_20-16-40.jpg'


const imga = new Image();
imga.src = imgg;
const imgrrr = document.querySelector('.img').append(imga);

const funct = (a, b) => a*b;
console.log(multt(3,3))
console.log('Привет');
console.log(sum(4,2))