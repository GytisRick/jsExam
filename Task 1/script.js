/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

'use strict'

function createParagraph (text, value) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `${text}:  ${value}`;
    disp.appendChild(paragraph);
}

const btn = document.getElementById("submit-btn");
const input = document.getElementById("search");

const disp = document.getElementById("output");
disp.style.maxWidth = "80%";
disp.style.margin = "0 auto";

btn.onclick = function (event) {
    event.preventDefault();
    disp.innerHTML = "";
    
    createParagraph("Svarai", input.value * 2.2046);
    createParagraph("Gramai", input.value / 0.0010000);
    createParagraph("Uncijos", input.value * 35.274);
}
