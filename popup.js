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

initAddEventListenerPopup();
