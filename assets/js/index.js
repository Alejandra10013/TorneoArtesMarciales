import { Saiyajin, Humano } from "./razas.js";

let participantes = [];

document.getElementById("btnRegistrar").addEventListener("click", () => {
    let nombre = document.getElementById("nombre");
    let raza = document.getElementById("raza");
    let preview = document.getElementById("preview");
    let imgSrcBckg = preview.style.backgroundImage;
    let imgSrc = imgSrcBckg.slice(5, imgSrcBckg.length - 2);
    let xp = document.getElementById("poderPelea");


    let nuevoParticipante;

    if (raza.value == "Saiyajin") {
        nuevoParticipante = new Saiyajin(
            nombre.value,
            imgSrc,
            xp.value,
            raza.value
        );
    } else if (raza.value == "Humano") {
        nuevoParticipante = new Humano(
            nombre.value,
            imgSrc,
            xp.value,
            raza.value
        );
    }

    if (raza.value && nombre.value && xp.value && imgSrcBckg) {
        participantes.push(nuevoParticipante);
        nombre.selectedIndex = 0;
        raza.selectedIndex = 0;
        preview.style.backgroundImage = "none";
        imgSrcBckg = preview.style.backgroundColor = "#f0f0f0";
        xp.value = "";

        reloadTable();

    } else {
        alert("Complete el formulario");
    }
});

const reloadTable = () => {
    const participantesTemp = document.getElementById("Participantes");
    participantesTemp.innerHTML = "";
    participantes.forEach((p, i) => {
        participantesTemp.innerHTML += `
                <div class="px-2 pb-2 participante" data-fighter="${p.getNombre()}">
                    <div class="card">
                        <img src="${p.getImg()}" class="card-img-top" />
                        <div class="card-body">
                            <h4 class="card-title">${p.getNombre()}</h4>
                            <h6 class="card-text">Raza: ${p.getRaza()}</h6>
                            <h6 class="card-text">Poder: <span class="text-danger">${p.getPoder()}</span></h6>
                            <button class="btn btn-warning mt-1" onclick="displayHabilidad('${i}')"> habilidad</button>
                        </div>
                    </div>
                </div>
            `;
    });
};

window.displayHabilidad = (i) => {
    const participante = participantes[i];
    if (participante.getRaza() == "Saiyajin") {
        participante.transformacion();
    } else if (participante.getRaza() == "Humano") {
        participante.coraje();
    }
    reloadTable();
};

document.getElementById("btnMasFuerte").addEventListener("click", () => {
    const masFuerte = participantes.sort((a, b) => b.getPoder() - a.getPoder())[0];
    const nombre = masFuerte.getNombre();

    document.querySelector(`[data-fighter='${nombre}'] div`).style.boxShadow = "0px 0px 10px 5px red"
});