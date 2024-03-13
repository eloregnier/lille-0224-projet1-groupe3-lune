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