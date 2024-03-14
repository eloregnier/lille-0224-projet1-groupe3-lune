
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

// bouton dropdown

const dropdownBtn = document.querySelectorAll(".dropdown-button");
const dropdownMenu = document.querySelectorAll(".dropdown-menu-content");
for (let i = 0; i < dropdownBtn.length; i++) {
	dropdownBtn[i].addEventListener("click", function () {
		dropdownMenu[i].classList.toggle("visible");
	})
}

//fin bouton dropdown




const slides = [
	{
		"image": "slide1.png",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.png",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.png",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const flecheSuivant = document.querySelectorAll('#suivant')



