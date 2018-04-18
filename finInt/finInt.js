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
        financialBodyRef.appendChild(list)
        //h2
       const titleHead = document.createElement('h2') //creating h2 element
       titleHead.textContent = currentDetails.header //pulling info from array object
       financialBodyRef.appendChild(titleHead) //sending h2 and value to DOM

       //Create unordered list and list items for one section
        if (currentDetails.header === "Potential Bankroll") {
            const ulContent = document.createElement('ul')

            currentDetails.content.forEach((listItem) => {

                const liContent = document.createElement('li')
                liContent.textContent = listItem
                financialBodyRef.appendChild(liContent)
            })    

        } else {

            //p element
            const pContent = document.createElement('p') //creating paragraph element
            pContent.textContent = currentDetails.content //pulling info from array object
            financialBodyRef.appendChild(pContent)
        }


    }
)


