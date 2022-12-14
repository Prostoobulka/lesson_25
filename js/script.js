"use strict"

window.addEventListener("load", pageLoaded);
function pageLoaded(e) {
	document.documentElement.classList.add('loaded');
}
/*
const widthBrowse = window.innerWidth;
console.log(widthBrowse);
const widthBrowseLine = document.documentElement.clientWidth;
console.log(widthBrowseLine);
const widthLine = widthBrowse - widthBrowseLine;
console.log(widthLine);
*/



/*
document.addEventListener("click", action);
function action(event) {
!!! if (event.target.closest(".link") && !event.target.closest(".link.link-especially")) {
		console.log('1');
	}
}
*/
/*
const block = document.querySelector(".block");
block.addEventListener("mousemove", function (event) {
	block.innerHTML = `
	Page X - ${event.clientX} <br>
	Page Y - ${event.clientY}`
});
*/

// .relatedTarget - можливість відслідковувати при певних діях
// Різниця між mouseenter, mouseleave --- mouseover, mouseout,
// в них поведінка на дочірні елементи інша
/*
const block = document.querySelector(".block");
block.addEventListener("mouseover", function (event) {
	console.log("Курсор на обєкті");
});
block.addEventListener("mouseout", function (event) {
	console.log("Курсор не на обєкті");
});
*/

// event.code and event.key ----- keyup, keydown
/*
document.addEventListener("keydown", function (event) {
	console.log(`Клавіша - ${event.code} ${event.key}`);
});

document.addEventListener("keyup", function (event) {
	console.log(`Клавіша - ${event.code} ${event.key}`);
});
*/

const btn = document.querySelector(".search-form__start");
const input = document.querySelector(".search-form__input");
const inputAttr = input.getAttribute("maxlength");
const counter = document.querySelector(".search-form__counter span");
counter.innerHTML = inputAttr;
document.addEventListener("click", action);
function action(e) {
	if (e.target.closest(".search-form__start")) {
		btn.classList.toggle("_active");
	}
	else if (e.target.closest(".search-form__input")) {
		btn.classList.add("_active");
	}
	else if (!e.target.closest(".search-form__start")) {
		btn.classList.remove("_active");
	}
	// console.log(e.type === "click");
}

document.addEventListener("keyup", actionReturn)
function actionReturn(e) {
	if (e.code === "Escape" || e.key === "Escape") {
		btn.classList.remove("_active");

	}

}
setTimeout(actionReturn, 2000);
document.addEventListener("keydown", actionRepeat);
function actionRepeat(e) {
	if (e.repeat) setAttrCounter();
}

input.addEventListener("keyup", setAttrCounter);
function setAttrCounter() {
	const counterResult = inputAttr - input.value.length;
	counter.innerHTML = counterResult;
}
