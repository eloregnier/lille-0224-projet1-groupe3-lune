console.log("hello carroussel");
// CARROUSEL START //
document.body.onload = function () {
    nbr = 9;
    p = 0;
    container = document.getElementById("container");
    let g = document.getElementById("g");
    let d = document.getElementById("d");
    container.style.width = (1000 * nbr) + "px";
    for (i = 1; i <= nbr; i++) {
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('images/slide" + i + ".png')";
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