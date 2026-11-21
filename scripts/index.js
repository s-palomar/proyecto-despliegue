"use strict";

/* Cálculo impuestos */
const btnCalcular = document.querySelector("#btn-calcular");
const inputBase = document.querySelector("#base");
const selectTipo = document.querySelector("#tipo");
const divErrores = document.querySelector("#errores");
const divResultado = document.querySelector("#resultado");

btnCalcular.addEventListener("click", () => {
    /* Vaciamos div errores y resultado*/
    divErrores.textContent = "";
    divResultado.textContent = "";

    /* Recuperamos valores introducidos*/
    let base = parseFloat(inputBase.value);
    let tipo = selectTipo.value.toLowerCase();
    let iva = 1;

    switch(tipo) {
        case "exento":
            iva = 1;
            break;
        case "minimo":
            iva = 1.04;
            break;
        case "reducido":
            iva = 1.1;
            break;
        case "normal":
            iva = 1.21;
            break;
    }
    
    try {
        if(isNaN(base) || base <= 0){
            throw new Error ("Introduzca un valor numérico positivo");
        }
        if(tipo === "") {
            throw new Error ("Indique el tipo de IVA");
        }

        let total = (base * iva).toFixed(2);
        divResultado.innerHTML = `El total con IVA es de: ${total} €`;
    } catch (e) {
        divErrores.innerHTML = e.message;
    }
});

/* Simulador inversión */
const btnSimular = document.querySelector("#btn-simular");
const inputNombreCliente = document.querySelector("#nombreCliente");
const inputCapitalInicial = document.querySelector("#capitalInicial");
const inputAportacionMensual = document.querySelector("#aportacionMensual");
const inputMeses = document.querySelector("#mesesSimulacion");
const selectPerfil = document.querySelector("#perfilRiesgo");
const errorSimulador = document.querySelector("#errorSimulador");
const resultadoSimulador = document.querySelector("#resultadoSimulador");

function calcularTasaMensual(perfilRiesgo) {
    let interesAnual = 0;

    switch(perfilRiesgo) {
        case "bajo":
            interesAnual = 0.02;
            break;
        case "medio":
            interesAnual = 0.05;
            break;
        case "alto":
            interesAnual = 0.08;
            break;
        default:
            interesAnual = 0;
    }
    return interesAnual / 12;
}

btnSimular.addEventListener("click", function() {
    errorSimulador.textContent = "";
    resultadoSimulador.textContent = "";

    let capitalInicial = parseFloat(inputCapitalInicial.value);
    let aportacionMensual = parseFloat(inputAportacionMensual.value);
    let meses = parseInt(inputMeses.value);
    let perfilRiesgo = selectPerfil.value.toLowerCase();

    try {
        if (isNaN(capitalInicial) || capitalInicial < 1000) {
            throw new Error ("El capital inicial ahorrado debe ser mayor o igual a 1000.");
        } else if (isNaN(aportacionMensual) || aportacionMensual < 0) {
            throw new Error ("La aportación mensual extra no puede ser negativa.");
        } else if (isNaN(meses) || meses < 1 || meses > 60) {
            throw new Error ("Los meses a simular deben estar entre 1 y 60 (ambos inclusive).");
        } else if (perfilRiesgo === "") {
            throw new Error ("El perfil de riesgo no puede estar vacío.");
        } else {
            let tasaMensual = calcularTasaMensual(perfilRiesgo);
            let capitalAcumulado = capitalInicial;
            let informe = "";

            for (let i = 1; i <= meses; i++) {
                let intereses = capitalAcumulado * tasaMensual;
                capitalAcumulado = capitalAcumulado + intereses + aportacionMensual;
                capitalAcumulado = Math.round(capitalAcumulado * 100) / 100; 
                informe += `[-] Fin del Mes ${i} -> Capital acumulado: ${capitalAcumulado} € <br>`;
            }
            resultadoSimulador.innerHTML = informe;
        }
    } catch (e) {
        errorSimulador.style.color = "red";
        errorSimulador.textContent = e.message;
    }
});
