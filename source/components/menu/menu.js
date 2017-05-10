import './menu.scss';

export default function (arr, className) {
	const menu = document.createElement("ul");
	menu.classList.add(className);
	let listItems = '';
	arr.forEach( item => {listItems += `<li>${item}</li>`;} );
	menu.insertAdjacentHTML("beforeend", listItems);
	return menu;
}