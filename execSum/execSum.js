// A new "virtual" document fragment to contain components
const fragment = document.createDocumentFragment()

// Create div and nav child
const navi = document.createElement ('nav')
const execSum = document.createElement ('a')
execSum.textContent = "Summary"
navi.appendChild(execSum)

const rapSht = document.createElement ('a')
rapSht.textContent = " Rap Sheet"
navi.appendChild(rapSht)

const NewsFeed = document.createElement ('a')
NewsFeed.textContent = " News Feed"
navi.appendChild(NewsFeed)

const finInt = document.createElement ('a')
finInt.textContent = " Financial Interests"
navi.appendChild(finInt)

const aboutTeam = document.createElement ('a')
aboutTeam.textContent = " About the Team"
navi.appendChild(aboutTeam)


fragment.appendChild(navi)


/*
    Now I can update my HTML document all at once, with all
    three emperor components rendered. Otherwise, I would
    have needed to add each one, individually - a much more
    "expensive" operation.
*/
document.querySelector("#nav").appendChild(fragment)