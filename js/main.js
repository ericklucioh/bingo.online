
// Encapsula os dados e funções de main em window.main
window.main = window.main || {};

window.main.Arrays = {
   B: [],
   I: [],
   N: [],
   G: [],
   O: [],
   all: []
};

window.main.ArraysInString = ['B', 'I', 'N', 'G', 'O','all'];
window.main.LettersInString = ['B', 'I', 'N', 'G', 'O'];

window.main.intervalMap = {
   B: { min: 1, max: 15 },
   I: { min: 16, max: 30 },
   N: { min: 31, max: 45 },
   G: { min: 46, max: 60 },
   O: { min: 61, max: 75 }
};

window.main.inputNumber = document.getElementById("value");

window.main.newNumber = function() {
   let value = window.main.inputNumber.value;
   window.main.inputNumber.value = "";
   if ( value == "" ) {}
   else if (window.funcional.validations(value)) {
      window.funcional.startMainProcess(value);
      window.naoFuncional.saveArrays(window.main.Arrays['all'], 'all'); 
   }
};

window.main.removeSlot = function(i) {
   const slot = document.getElementById(`value${i}`);
   const value = slot.textContent;
   window.funcional.removeSlotProcess(value, i);
};

window.main.searchValue = function(value) {
   for ( const letter in window.main.Arrays ) {
      const array = window.main.Arrays[letter];
      const index = array.indexOf(value);
      if ( index !== -1 ) {
         array.splice(index, 1);
         window.funcional.collumns(array, letter);
         window.naoFuncional.saveArrays(array, letter);
      }
   }
};

window.main.cleanYes = function() {
   window.funcional.cleanAllArrays();
   window.funcional.cleanAllCache();
   window.main.cleanNo();
   window.naoFuncional.cleanLastValue()
   window.body.addSlot();
   window.funcional.cleanAllCollumns();
   window.funcional.recentNumbers();
};

window.main.cleanNo = function() {
   document.getElementById("confirm").innerHTML = "";
};

