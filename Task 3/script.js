/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const makeRequest = () => {
    fetch("https://api.github.com/users")
        .then(response => response.json())
        .then(data => {
            showResults(data);
        });
}

const showResults = (responseItems) => {
    const output = document.getElementById("output");
    output.innerHTML = "";

    responseItems.forEach((item) => {
        const title = document.createElement("div");
        title.className = "title";
        title.innerText = item.login;

        const img = document.createElement("img");
        img.src = item.avatar_url;
        img.alt = item.login;

        const div = document.createElement("div");
        div.className = "card";

        div.appendChild(title);
        div.appendChild(img);

        output.appendChild(div);
    });
}

document.getElementById("btn").onclick = function () {
    makeRequest();
}
