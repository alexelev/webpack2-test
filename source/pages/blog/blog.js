import createMenu from "../../components/menu/menu.js";

const menu = createMenu(["Главная", "Блог"], 'menu');

document.body.appendChild(menu);
console.log('blog page');