import './blog.scss';

import createMenu from "../../components/menu/menu.js";

const menu = createMenu(["Главная", "Блог", "Портфолио"], 'menu');

document.body.appendChild(menu);
console.log('blog page');
