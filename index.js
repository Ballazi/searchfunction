
let searchValue = async () => {
    let preField = document.querySelector('.outer');
    if(preField)
    {
        preField.remove(preField);
    }
    let response = await fetch('https://api.publicapis.org/entries');
    let myValue = await response.json();
    let apiValue = document.querySelector('#input').value;
    let filteredValue = (myValue.entries).filter(e => e.API === apiValue);
    let divCon = document.querySelector(".mainCon2");
    let subCon = document.createElement('div');
    subCon.setAttribute('class', 'outer');
    subCon.innerHTML = `
                       <div>
                        <p>${filteredValue[0].API}</p>
                        <p>${filteredValue[0].Description}</p>
                       </div>
                        `;
    divCon.appendChild(subCon);
}


let searchRendum = async () => {
    let preField = document.querySelector('.outer');
    if(preField)
    {
        preField.remove(preField);
    }
    let response = await fetch('https://api.publicapis.org/entries');
    let myValue = await response.json();
    const random = Math.floor(Math.random() * myValue.count);
    console.log(random, myValue.entries[random]);
    let divCon = document.querySelector(".mainCon2");
    let subCon = document.createElement('div');
    subCon.setAttribute('class', 'outer');
    subCon.innerHTML = `
                       <div>
                        <p>${myValue.entries[random].API}</p>
                        <p>${myValue.entries[random].Description}</p>
                       </div>
                        `;
    divCon.appendChild(subCon);
}