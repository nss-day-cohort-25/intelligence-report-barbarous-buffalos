// A new "virtual" document fragment to contain components
const fragment = document.createDocumentFragment()

// Create div and nav child
const navi = document.createElement ('nav')

const execSum = document.createElement ('a')
execSum.href = "https://soundcloud.com/enkiisgod"
execSum.textContent = "Summary"
navi.appendChild(execSum)

const rapSht = document.createElement ('a')
rapSht.href = "https://soundcloud.com/enkiisgod"
rapSht.textContent = " Rap Sheet"
navi.appendChild(rapSht)

const NewsFeed = document.createElement ('a')
NewsFeed.href = "https://soundcloud.com/enkiisgod"
NewsFeed.textContent = " News Feed"
navi.appendChild(NewsFeed)

const finInt = document.createElement ('a')
finInt.href = "https://soundcloud.com/enkiisgod"
finInt.textContent = " Financial Interests"
navi.appendChild(finInt)

const aboutTeam = document.createElement ('a')
aboutTeam.href = "https://soundcloud.com/enkiisgod"
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

window.onscroll = function() {myFunction()};

var sticky = navi.offsetTop

function myFunction() {
    if (window.pageYOffset >= sticky) {
      navi.classList.add("sticky")
    } else {
      navi.classList.remove("sticky");
    }
  }