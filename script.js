const fechaEvento = new Date(
"August 8, 2026 17:00:00"
).getTime();

const intervalo = setInterval(() => {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    const dias =
    Math.floor(
        diferencia /
        (1000 * 60 * 60 * 24)
    );

    const horas =
    Math.floor(
        (diferencia %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutos =
    Math.floor(
        (diferencia %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const segundos =
    Math.floor(
        (diferencia %
        (1000 * 60))
        /
        1000
    );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

    if(diferencia < 0){

        clearInterval(intervalo);

        document.querySelector(".contador").innerHTML =
        "<h2>🎉 La fiesta ha comenzado 🎉</h2>";
    }

},1000);

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let reproduciendo = false;

document.addEventListener("click", () => {

    if(!reproduciendo){

        music.play();

        reproduciendo = true;

        musicBtn.classList.add("playing");
    }

}, { once:true });

musicBtn.addEventListener("click", () => {

    if(music.paused){

        music.play();

        musicBtn.classList.add("playing");

    }else{

        music.pause();

        musicBtn.classList.remove("playing");
    }

});

const btnOutfit = document.getElementById("btnOutfit");
const modalOutfit = document.getElementById("modalOutfit");
const cerrarOutfit = document.getElementById("cerrarOutfit");

btnOutfit.addEventListener("click", () => {

    modalOutfit.style.display = "flex";

});

cerrarOutfit.addEventListener("click", () => {

    modalOutfit.style.display = "none";

});

window.addEventListener("click", (e) => {

    if(e.target === modalOutfit){

        modalOutfit.style.display = "none";
    }

});