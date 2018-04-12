//Set up db
const ArticleListDB = {}

// Article table in database
ArticleDatabase.articles = []

// Add articles to the article table in the article database
ArticleDatabase.articles.push(
    {
        name: "Algeria military plane crash: 257 dead near Algiers",
        desc: "An Algerian military plane has crashed near the capital killing 257 people on board, officials say.",
        url: "http://www.bbc.com/news/world-africa-43724941",
        ratingOfInvolvement: "40%",
        date: "11 April 2018",
        location: "Algiers",
        typeOfEvent: "Plane Crash",
        victims: "257 including algerian military and their families",
        witnesses: "none",
        lawEnfAgency: "Directorate General for National Security"
    },
    {
        name: "World's Biggest Data Breach",
        desc: "Earlier this year, NSA whistleblower Edward Snowden met with Jacqueline Moudeina, the first female lawyer in Chad and a legendary human rights advocate...",
        url: "http://www.informationisbeautiful.net/visualizations/worlds-biggest-data-breaches-hacks/",
        ratingOfInvolvement: "60%",
        date:"04/10/2018",
        location: "World",
        typeOfEvent: "Data Breach",
        victims: "Millions",
        witnesses: "Many",
        lawEnfAgency: "FCC FBI CIA"
    },
    {
        name: "Road closure to affect traffic near First Tennessee Park",
        desc: "A portion of 5th Avenue North in downtown Nashville will be closed due to emergency sewer repairs starting on Thursday.",
        url: "http://www.wsmv.com/story/37942345/road-closure-to-affect-traffic-near-first-tennessee-park",
        ratingOfInvolvement: "100%",
        date:"04/01/2018",
        location: "Nashville",
        typeOfEvent: "Road Closure",
        victims: "Hundreds",
        witnesses: "Several",
        lawEnfAgency: "Nashville Metro Polic"
})

//Identify the location in the DOM to put the articles info
const listOfArticles = document.querySelector("#articleList")

//Put the DOM components into html
const articleDomBuilder = () => {

    // Create a block element that will hold one article each
    let article = document.createElement("div")
    article.className = "articleItem"


    // Iterate over the array of articles in the database

    ArticleDatabase.articles.forEach(
        (currentArticle, i) => {

                // h2 child component of section
                const articleName = document.createElement("h2")
                articleName.classList = "article__title"
                articleName.textContent = currentArticle.name
                article.appendChild(articleName)

                // p child component of section
                const articleDesc = document.createElement("p")
                articleDesc.classList = "article_desc"
                articleDesc.textContent = currentStudent.birthPlace
                article.appendChild(studentBP)

                // p child component of section
                const studentGender = document.createElement("p")
                studentGender.classList = "student__gender"
                studentGender.textContent = currentStudent.gender
                studentSection.appendChild(studentGender)

                // Append HTML representation of student to the DOM
                row.appendChild(studentSection)
            }
        }
    )

    // Just in case there are an exact multiple of 3 students, add the last row
    if (row.childNodes.length) {
        studentBodyRef.appendChild(row)
    }

}

studentDomBuilder()
© 2018 GitHub, Inc.
