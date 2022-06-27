/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
'use strict'

// import returnBrand from './modules/makeNewDom.js';

//Bandziau kazka gimdyti is pamoku buvusiu bet bbs nemoku su paemimais

// const ENDPOINT = 'cars.json';

// fetch(ENDPOINT)
// .then(response => response.json())
// .then(data => {data;returnBrand(data);
// });
// .catch(console.error( => console.log(err));)

fetch("./cars.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showResults(data);
    });

const showResults = (responseItems) => {
    const output = document.getElementById("output");
    // output.innerHTML = "";

    responseItems.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card"; // stiliu geriau prisideti i CSS

        const brand = document.createTextNode(item.brand);
        card.appendChild(brand);

        const modelsList = document.createElement("ul");
        Array.from(item.models).map((model) => {
            const li = document.createElement("li");
            li.innerText = model;

            modelsList.appendChild(li);
        });
        card.appendChild(modelsList);

        output.appendChild(card);
    });

}