function verificarRespuestas() {
    const respuestasCorrectas = [
        { tipo: "graminea", ciclo: "perenne", uso: "pastoreo" },
        // Añadir aquí más especies según estén en HTML
    ];

    const speciesDivs = document.querySelectorAll(".species");
    let correcto = true;

    speciesDivs.forEach((div, i) => {
        const tipo = div.querySelector(".tipo").value;
        const ciclo = div.querySelector(".ciclo").value;
        const uso = div.querySelector(".uso").value;

        if (
            tipo !== respuestasCorrectas[i].tipo ||
            ciclo !== respuestasCorrectas[i].ciclo ||
            uso !== respuestasCorrectas[i].uso
        ) {
            correcto = false;
        }
    });

    const resultado = document.getElementById("resultado");
    if (correcto) {
        resultado.innerHTML = "✅ ¡Correcto! Tu clave para el siguiente reto es: <strong>FORRAJERO2025</strong>";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "❌ Alguna clasificación es incorrecta. Revisa tus selecciones.";
        resultado.style.color = "red";
    }
}
