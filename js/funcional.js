// Remove todos os imports
// import * as main from './main.js'
// import * as naoFuncional from './naoFuncional.js'
// import * as regrasDeNegocio from './regrasDeNegocio.js'

// Troca export por window
// Encapsula as funções dentro de window.funcional
window.funcional = window.funcional || {};

window.funcional.validations = function(value) {
   if( window.regrasDeNegocio.validIsInteger(value)  // Mudei regrasDeNegocio para window.regrasDeNegocio
   && window.regrasDeNegocio.validIntervalRage(value) 
   && window.regrasDeNegocio.validRepetedNumber(value)) { 
      return true
   }
   return false
};

window.funcional.loadWindow = function() {
   window.naoFuncional.loadArrays();  // Mudei naoFuncional para window.naoFuncional
   window.funcional.printAllCollumns();
   window.funcional.recentNumbers();
   window.naoFuncional.newlastValue();
   window.body.addSlot();
   var campoTexto = document.getElementById('value');
   campoTexto.focus()
};

window.addEventListener('load', window.funcional.loadWindow);

window.funcional.recentNumbers = function() {
   window.naoFuncional.cleanRecentNumbers();  // Mudei naoFuncional para window.naoFuncional
   window.naoFuncional.printRecentNumbers();
};

window.funcional.cleanAllCollumns = function() {
   for ( let letter of window.main.LettersInString ) {  // Mudei main para window.main
      window.naoFuncional.cleanCollumn(letter);  // Mudei naoFuncional para window.naoFuncional
   }
};

window.funcional.cleanAllCache = function() {
   for( let letter of window.main.ArraysInString ) {  // Mudei main para window.main
      window.naoFuncional.cleanCache(letter);  // Mudei naoFuncional para window.naoFuncional
   }
};

window.funcional.cleanAllArrays = function() {
   for ( const letter of window.main.ArraysInString ) {  // Mudei main para window.main
      window.main.Arrays[letter] = [];  // Mudei main para window.main
   }
};

window.funcional.lastValue = function() {
   window.naoFuncional.cleanLastValue();  // Mudei naoFuncional para window.naoFuncional
   window.naoFuncional.newlastValue();
};

window.funcional.collumns = function(array, letterName) {
   window.naoFuncional.cleanCollumn(letterName);  // Mudei naoFuncional para window.naoFuncional
   window.naoFuncional.printCollum(array, letterName);
};

window.funcional.printAllCollumns = function() {
   for( let letter of (window.main.LettersInString)) {  // Mudei main para window.main
      window.naoFuncional.printCollum(window.main.Arrays[letter], letter);  // Mudei ambos
   }
};

window.funcional.printAllSlots = function() {
   for(let i of window.main.Arrays['all']) {  // Mudei main para window.main
      window.body.addSlot(i);  // Mudei body para window.body
   }
};

window.funcional.startMainProcess = function(value) {
   window.main.Arrays['all'].unshift(value);  // Mudei main para window.main
   window.naoFuncional.saveArrays(window.main.Arrays['all'],'all');  // Mudei ambos
   window.funcional.recentNumbers();
   window.body.addSlot();  // Mudei body para window.body
   window.funcional.sortNumber(value); 
   // viewerPage.Reload(); // Esta linha parece ter um erro - verifique se viewerPage existe
};

window.funcional.removeSlotProcess = function(value, i) {
   window.main.Arrays['all'].splice(i, 1);  // Mudei main para window.main
   window.naoFuncional.cleanCache('all');  // Mudei naoFuncional para window.naoFuncional
   window.naoFuncional.saveArrays(window.main.Arrays['all'],'all');  // Mudei ambos
   window.main.searchValue(value);  // Mudei main para window.main
   window.funcional.recentNumbers();
   window.naoFuncional.cleanLastValue();  // Mudei naoFuncional para window.naoFuncional
   window.naoFuncional.newlastValue();
   window.body.addSlot();  // Mudei body para window.body
   window.funcional.sortNumber();
};

window.funcional.sortNumber = function(value) {
   let letter = window.regrasDeNegocio.discoverCorrectLetter(value);  // Mudei regrasDeNegocio para window.regrasDeNegocio
   if (letter) {
      const array = window.main.Arrays[letter];  // Mudei main para window.main
      array.push(value);
      window.funcional.collumns(array, letter);
      window.naoFuncional.saveArrays(array, letter);  // Mudei naoFuncional para window.naoFuncional
      window.funcional.lastValue(value);
   }
};

// Remove todas as linhas export