document.addEventListener("keypress", function(e) {
   if (e.key === "Enter") {
      window.main.newNumber(); // Mudei main para window.main
   }
});

// Encapsula funções não-funcionais em window.naoFuncional
window.naoFuncional = window.naoFuncional || {};

window.naoFuncional.confirmToClean = function() {
   document.getElementById("confirm").innerHTML = `
      <div id="clearWindow" class="centralized">
         Tem certeza?
         <button id="no" onclick="cleanNo()">
            Não
         </button>
         <button id="yes" onclick="cleanYes()">
            Sim
         </button>
      </div>`;
};

window.naoFuncional.loadArrays = function() {
   for (const arrayName of window.main.ArraysInString) { // Mudei main para window.main
      const array = JSON.parse(localStorage.getItem(arrayName)) || [];
      window.main.Arrays[arrayName] = array; // Mudei main para window.main
   }
};

window.naoFuncional.cleanRecentNumbers = function() {
   for (let i = 0; i < 7; i++) {
      document.getElementById(`recentNumber${i}`).innerHTML = "";
   }
};

window.naoFuncional.printRecentNumbers = function() {
   for (let i = 0; i < 7; i++) {
      if (window.main.Arrays['all'][i] > 0) { // Mudei main para window.main
         document.getElementById(`recentNumber${i}`).innerHTML = window.main.Arrays['all'][i]; // Mudei main para window.main
      }
   }
};

window.naoFuncional.cleanCache = function(letter) {
   localStorage.removeItem(letter);
   window[letter] = [];
};

window.naoFuncional.addLastValue = function(value) {
   const allNumbers = document.getElementById("allNumbers");
   const elements = allNumbers.querySelectorAll("div");

   elements.forEach(function(element) {
      const content = element.textContent.trim();
      if (content === value.toString()) {
         element.classList.add("new-value");
      }
   });
};

window.naoFuncional.cleanLastValue = function() {
   var elementsWithNewClass = document.querySelectorAll(".new-value");
   elementsWithNewClass.forEach(function(element) {
      element.classList.remove("new-value");
   });
};

window.naoFuncional.newlastValue = function() {
   let num = document.getElementById('recentNumber0');
   let value = num.textContent;
   if (value > 0) {
      window.naoFuncional.addLastValue(value); // Mudei para window.naoFuncional.addLastValue
   }
};

window.naoFuncional.cleanCollumn = function(arrayName) {
   for (let i = 0; i < 15; i++) {
      document.getElementById(`${arrayName}${i}`).innerHTML = "";
   }
};

window.naoFuncional.printCollum = function(array, letterName) {
   for (let i = 0; i < array.length; i++) {
      document.getElementById(`${letterName}${i}`).innerHTML = array[i];
   }
};

window.naoFuncional.saveArrays = function(array, arrayName) {
   localStorage.setItem(arrayName, JSON.stringify(array));
};

// Remove todas as linhas export