console.log("hello carroussel");
// CARROUSEL START //
document.body.onload = function () {
    nbr = 6;
    p = 0;
    container = document.getElementById("container");
     g = document.getElementById("g");
     d = document.getElementById("d");
    container.style.width = (1000 * nbr) + "px";
    for (i = 1; i <= nbr; i++) {
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('images/mosaic" + i + ".png')";     // deja modifier
        container.appendChild(div);
    }
}
g.onclick = function () {
    if (p > -nbr + 1)
        p--;
    container.style.transform = "translate(" + p * 1000 + "px)";
    container.style.transition = "all 0.5 ease";
}
d.onclick = function () {
    if (p < 0)
        p++;
    container.style.transform = "translate(" + p * 1000 + "px)";
    container.style.transition = "all 0.5 ease";
}
// CARROUSEL FIN //