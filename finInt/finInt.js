//Use querySelector()
const financialBodyRef = document.querySelector("financialInterests")

//Send to DOM
FinancialDatabase.details.forEach(
    currentDetails => {
        //create section elements
    const list = document.createElement('section')
    const listItems = document.createAttribute('class')
    listItems.value = 'financialDetails' //section class="financialDetails"

        //Add the attribute to the component
        list.setAttributeNode(listItems)

        //h2
       const titleHead = document.createElement('h2')
       titleHead.textContent = FinancialDatabase.details.header()

       
        //h3
            //ul
                //li
    }
)


