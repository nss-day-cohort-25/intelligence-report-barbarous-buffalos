//Use querySelector()
const financialBodyRef = document.querySelector("financialInterests")

//Write to DOM
//content array
const bankrollArray = [
    {
        bank: "Suspected of receiving funding from 'hacktivists'"
    },
    {
        bank: "Paid speaking engagements"
    },
    {
        bank: "Unconfirmed support from the Russian Federation"
    }
]
//create section elements
const list = document.createElement('section')
const listItems = document.createAttribute('class')
listItems.value = 'financialSources' //section class="financialSources"
    //Add the attribute to the component
    list.setAttributeNode(listItems)

    //h2
    const sourceHeader = document.createElement('h2')
    sourceHeader.textContent("Potential Bankroll Sources")

    list.appendChild(sourceHeader)
    //h3
        //ul
            //li
//financialDatabase.js for arrays and objects -- local storage

{
    name:"header title"
    infoContent: {
        li
    },
    {
        li
    }
},
{
    name: "header title"
    infoContent: "paragraph content"
},
{
    name: "header title"
    infoContent: "paragraph content"
}