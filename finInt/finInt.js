const FinancialDB = JSON.parse(localStorage.getItem("FinancialDatabase"))

//Use querySelector()
const financialBodyRef = document.querySelector("#financialInterests")

//Send to DOM
FinancialDB.details.forEach(
    currentDetails => {
        //create section elements
    const list = document.createElement('section')
    const listItems = document.createAttribute('class')
    listItems.value = 'financialDetails' //section class="financialDetails"

        //Add the attribute to the component
        list.setAttributeNode(listItems)

        //h2
       const titleHead = document.createElement('h2')
       titleHead.textContent = currentDetails.header
       financialBodyRef.appendChild(titleHead)
     

       
        //h3
            //ul
                //li
    }
)


