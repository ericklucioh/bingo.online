// Remove todos os imports
// import * as main from './main.js'
// import * as funcional from './funcional.js'
// import * as naoFuncional from './naoFuncional.js'
// import * as body from './body.js'

// Troca export por window
// Encapsula funções de regras de negócio em window.regrasDeNegocio
window.regrasDeNegocio = window.regrasDeNegocio || {};

window.regrasDeNegocio.validIsInteger = function(value) {
    let valueToFloat = Number(value);
    let integer = Number.isInteger(valueToFloat);
    if (!integer) {
        alert("Precisa ser um numero inteiro!")
        return false;
    }
    return true;
};

window.regrasDeNegocio.validIntervalRage = function(value) {
    if( value <= 0 || value >75){
        alert("Invalid value");
        return false;
    }
    return true;
};

window.regrasDeNegocio.validRepetedNumber = function(value) {
    if(window.main.Arrays['all'].includes(value)) { // Mudei main para window.main
        alert("Value has already been inserted");
        return false;
    }
    return true;
};

window.regrasDeNegocio.discoverCorrectLetter = function(value) {
    let discovery;
    for (const letter in window.main.intervalMap) { // Mudei main para window.main
        const { min, max } = window.main.intervalMap[letter]; // Mudei main para window.main
        if (value >= min && value <= max) {
            discovery = letter;
        }
    }
    return discovery;
};

// Remove todas as linhas export