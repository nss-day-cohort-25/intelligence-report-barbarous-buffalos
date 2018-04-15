//Set up db
const ArticleListDB = {}

// Article table in database
ArticleListDB.articles = []

// Add articles to the article table in the article database
ArticleListDB.articles.push(
    {
        title: "Algeria military plane crash: 257 dead near Algiers",
        description: "An Algerian military plane has crashed near the capital killing 257 people on board, officials say.",
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
        title: "World's Biggest Data Breach",
        description: "Earlier this year, NSA whistleblower Edward Snowden met with Jacqueline Moudeina, the first female lawyer in Chad and a legendary human rights advocate...",
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
        title: "Road closure to affect traffic near First Tennessee Park",
        description: "A portion of 5th Avenue North in downtown Nashville will be closed due to emergency sewer repairs starting on Thursday.",
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

//Function to put the DOM components into html
const articleDomBuilder = () => {

    // Create a block element that will hold one article each
    let article = document.createElement("div")
    article.className = "articleItem"


    // Iterate over the array of articles in the database

    ArticleListDB.articles.forEach(
        (currentArticle, i) => {

            listOfArticles.appendChild(article)

               // Section first
               const articleSection = document.createElement("span")
               articleSection.classList = "article_section"
               article.appendChild(articleSection)


                // h2 child component of section
                const articleTitle = document.createElement("h2")
                articleTitle.classList = "article_title"
                articleTitle.textContent = currentArticle.title
                articleSection.appendChild(articleTitle)
                console.log(articleTitle)

                // p child component of section
                const articleDescription = document.createElement("p")
                articleDescription.classList = "article_description"
                articleDescription.textContent = currentArticle.description
                articleSection.appendChild(articleDescription)
                console.log(articleDescription)

                // p child component of section
                const articleRating = document.createElement("p")
                articleRating.classList = "article_rating"
                articleRating.textContent = currentArticle.rating
                articleSection.appendChild(articleRating)

                // Append HTML representation of article to the DOM
                // article.appendChild(articleSection)
            }
    )
}

articleDomBuilder()

