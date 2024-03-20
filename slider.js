const slide = ["images/mosaique/mosaic1.png", "images/mosaique/mosaic2.png", "images/mosaique/mosaic3.png", "images/mosaique/mosaic4.png"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}