import personajesData from "./consulta.js";

document.getElementById("buttonImages").addEventListener("click", async () => {
    const { personajes } = await personajesData;
    const pj = document.getElementById("nombre").value;
    const imgPersonajes = personajes
        .find((p) => p.name == pj)
        .imagenes.map((i) => `<img width="200" src="./assets/imgs/${pj}/${i}" />`)
        .join("");
    document.getElementsByClassName("personajes")[0].innerHTML = imgPersonajes;
    document.querySelectorAll(".personajes img").forEach((i) => {
        i.addEventListener("click", (e) => {
            $("#imagenesModal").modal("toggle");
            const imgSrc = e.target.src;
            document.getElementById("preview").style.backgroundImage = `url(${imgSrc})`;
        });
    });
});