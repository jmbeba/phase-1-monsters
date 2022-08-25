const monsterContainer = document.getElementById("monster-container");  
const form = document.getElementById("monster-form")
const monstName = document.getElementById("monster-name");
const monstAge = document.getElementById("monster-age");
const monstDescription = document.getElementById("monster-description");
const back = document.getElementById("back");
const forward = document.getElementById("forward");
let pageNum = 1;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    fetch("http://localhost:3000/monsters", {
        method:"POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            "name" : monstName.value,
            "age" : monstAge.value,
            "description" : monstDescription.value
        })
    }).then(res => res.json()).then(data => {
        console.log(data);
    })
})

fetch(`http://localhost:3000/monsters/?_limit=50&_page=${pageNum}`).then(res => res.json()).then(data => {
    data.map((element) => {

        const card = document.createElement("div");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");

        h2.textContent = element.name;
        h3.textContent = `Age : ${element.age}`
        p.textContent = `Bio : ${element.description}`;

        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(p);

        monsterContainer.appendChild(card)
    })
    

})

forward.addEventListener("click", () => {
    pageNum++;
    monsterContainer.innerHTML = "";
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=${pageNum}`).then(res => res.json()).then(data => {
    data.map((element) => {

        const card = document.createElement("div");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");

        h2.textContent = element.name;
        h3.textContent = `Age : ${element.age}`
        p.textContent = `Bio : ${element.description}`;

        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(p);

        monsterContainer.appendChild(card)
    })
    

})
})

back.addEventListener("click", () => {
    pageNum--;
    monsterContainer.innerHTML = "";
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=${pageNum}`).then(res => res.json()).then(data => {
    data.map((element) => {

        const card = document.createElement("div");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");

        h2.textContent = element.name;
        h3.textContent = `Age : ${element.age}`
        p.textContent = `Bio : ${element.description}`;

        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(p);

        monsterContainer.appendChild(card)
    })
    

})
})