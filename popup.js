// POP UP

//Cette fonction affiche la popup par changement de classe
function afficherPopup() {
  let popupBackground = document.querySelector(".popupBackground");
  // La popup est masquée par défaut (display:none), ajouter la classe "active"
  // va changer son display et la rendre visible.
  popupBackground.classList.add("active");
}

//Cette fonction cache la popup lors du click sur le background par changement de classe

function cacherPopup() {
  let popupBackground = document.querySelector(".popupBackground");
  popupBackground.classList.remove("active");
}

// Cette fonction initialise les écouteurs d'événements qui concernent l'affichage de la popup.

function initAddEventListenerPopup() {
  // On écoute le click sur le bouton "commentaire" cela affiche la pop up
  let btnComment = document.querySelector(".btn");
  let popupBackground = document.querySelector(".popupBackground");
  btnComment.addEventListener("click", () => {
    popupBackground.classList.add("active");
  });
  // On écoute le click sur la div "popupBackground", si click baground alors cache la pop up
  popupBackground.addEventListener("click", (event) => {
    if (event.target === popupBackground) {
      cacherPopup();
    }
  });
}
// function afficherMessageOk() {
//
//   messageOk.addEventListener("submit", () => {

// })};
let form = document.querySelector(".formulaire");
let messageOk = document.querySelector(".messageOk");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   messageOk.classList.remove("messageOk");
// });

let close = document.querySelector(".close");
close.addEventListener("click", () => {
  cacherPopup();
});


// Clic sur bonton envoyé si vide => message erreur sinon=> message + fermeture du popup + effacer les inputs
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let comment = document.querySelector("#comment");
let messageError = document.querySelector(".messageError");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (email.value === "" || name.value === "" || comment.value === "") {
    messageError.innerHTML = "<br><hr>Formulaire incomplet";
  } else {
    messageError.innerHTML="";
    messageOk.innerHTML = "<br><hr>Message envoyé";
    setTimeout(function () {
      cacherPopup();
    }, 700);
    setTimeout(function () {
      messageOk.innerHTML = "";
    }, 700);
  }
  setTimeout(function () {
    name.value = "";
    email.value = "";
    comment.value = "";
  }, 700);
});

initAddEventListenerPopup();

