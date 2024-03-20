
// nav bar fixed
const navBarFixed = document.getElementById('navBarFixed');
const body = document.body;

window.onscroll = function () {
	myFunction();
}

let sticky = navBarFixed.offsetTop;

function myFunction() {
	console.log(sticky)
	if (window.pageYOffset >= sticky) {
		navBarFixed.classList.add('sticky')
	} else {
		navBarFixed.classList.remove('sticky')
	}
}
// fin nav bar fixed

// retournement image pour texte

const dropdownBtn = document.querySelectorAll(".dropdown-button");
const dropdownMenu = document.querySelectorAll(".dropdown-menu-content");
for (let i = 0; i < dropdownBtn.length; i++) {
	dropdownBtn[i].addEventListener("click", function () {
		dropdownMenu[i].classList.toggle("visible");
	})
}
const dropdownImg = document.querySelectorAll(".card-img");
for (let i = 0; i < dropdownBtn.length; i++) {
	dropdownBtn[i].addEventListener("click", function () {
		dropdownImg[i].classList.toggle("invisible");
	})
}


//fin retournement image pour texte









