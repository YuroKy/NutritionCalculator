import ingredients from "./ingredients.js";


function createElementWithText(tag, text){
    let element = document.createElement(tag);
    element.innerText = text;

    return element;
}

const createTableHeader = (header) => createElementWithText("th", header);
const createTableData = (header) => createElementWithText("td", header);

var mainContainer = document.querySelector(".main");
var table = document.createElement("table");
var tableHeader = document.createElement("tr");
table.appendChild(tableHeader);

tableHeader.appendChild(createTableHeader("Назва продукту"));
tableHeader.appendChild(createTableHeader("Порція (гр)"));

for(let ingredientKey in ingredients){
    let ingredient = ingredients[ingredientKey];

    var row = document.createElement("tr");
    row.appendChild(createTableData(ingredient.name));
    row.appendChild(createTableData(ingredient.portion));

    table.appendChild(row);
}

mainContainer.appendChild(table);

