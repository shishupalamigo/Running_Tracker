let entries = [];

const enteriesWrapper = document.querySelector("#entries");

function addNewEntry(newEntry) {
    enteriesWrapper.removeChild(enteriesWrapper.firstElementChild);
   const listItem = document.createElement('li');
   const listValue = document.createTextNode(newEntry.toFixed(1));
   listItem.appendChild(listValue);
   enteriesWrapper.appendChild(listItem);
}

function reducer(total, currentValue) {
    return total + currentValue;
}

function calcTotal() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById("total").innerText = totalValue;
    document.getElementById("progressTotal").innerText = totalValue;

}

function calcAverage() {
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById("average").innerText = average;
}

function handleSubmit(event) {
    event.preventDefault()
    const entry = Number(document.querySelector('#entry').value);
    if (!entry) return;
    document.querySelector("form").reset();
    entries.push(entry);
    addNewEntry(entry);
    calcTotal();
    calcAverage();
}

const form = document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);