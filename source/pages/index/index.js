import './index.scss';
import 'normalize.css';

import createMenu from "../../components/menu/menu.js";

const menu = createMenu(["Главная", "Блог"], 'menu');

document.body.appendChild(menu);
console.log('index page');