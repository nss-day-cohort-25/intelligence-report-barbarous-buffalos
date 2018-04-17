//Set up db
const ArticleListDB = {}

// Article table in database
ArticleListDB.articles = []

// Add articles to the article table in the article database
ArticleListDB.articles.push(
    {
        title: "Algeria military plane crash: 257 dead near Algiers",
        description: "An Algerian military plane has crashed near the capital killing 257 people on board, officials say. The aircraft came down just after taking off from Boufarik military airport, west of Algiers. An inquiry is under way into the cause of the crash - Algeria's worst-ever air disaster. ",
        url: "http://www.bbc.com/news/world-africa-43724941",
        rating: "Low",
        date: "4/11/18",
        location: "Algiers",
        typeOfEvent: "Plane Crash",
        victims: "257 - Algerian military and families",
        witnesses: "None",
        lawEnfAgency: "DGNS"
    },
    {
        title: "The Equifax Data Breach",
        description: "If you have a credit report, there’s a good chance that you’re one of the 143 million American consumers whose sensitive personal information was exposed in a data breach at Equifax, one of the nation’s three major credit reporting agencies.",
        url: "https://www.consumer.ftc.gov/blog/2017/09/equifax-data-breach-what-do",
        rating: "Medium",
        date:"9/8/17",
        location: "World",
        typeOfEvent: "Data Breach",
        victims: "Millions",
        witnesses: "Many",
        lawEnfAgency: "FCC FBI CIA"
    },
    {
        title: "Road closure to affect traffic near First Tennessee Park",
        description: "Crews have completed repairs on Fifth Avenue North after a sewer line collapsed near First Tennessee Park earlier this week. Officials with Metro Water Services will be able to reopen the street just in time before Friday night's Nashville Sounds game.",
        url: "http://www.wsmv.com/story/37942345/road-closure-to-affect-traffic-near-first-tennessee-park",
        rating: "High",
        date:"4/1/18",
        location: "Nashville",
        typeOfEvent: "Road Closure",
        victims: "Hundreds",
        witnesses: "Several",
        lawEnfAgency: "Nashville Metro Police"
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

               // Section - span for the article block
               const articleSection = document.createElement("span")
               articleSection.classList = "article_section"
               article.appendChild(articleSection)


                // Title and Date: h2 child of section
                const articleTitle = document.createElement("h2")
                articleTitle.classList = "article_title"
                articleTitle.textContent = currentArticle.title + "  -  " + currentArticle.date
                articleSection.appendChild(articleTitle)
                console.log(articleTitle)


                // Rating: p child of section


                const articleRating = document.createElement("p")
                articleRating.classList = "article_rating"
                articleRating.textContent = currentArticle.rating + " involvement "
                articleSection.appendChild(articleRating)
                console.log(articleRating)

                if (currentArticle.rating.toLowerCase() === "high") {
                    articleRating.classList += " rating_high"
                } else if (currentArticle.rating.toLowerCase() === "medium") {
                    articleRating.classList += " rating_medium"
                } else {

                }

                // Description: p child of section
                const articleDescription = document.createElement("p")
                articleDescription.classList = "article_description"
                articleDescription.textContent = currentArticle.description + "   "
                articleSection.appendChild(articleDescription)
                console.log(articleDescription)

                // URL: a child of description
                const articleUrl = document.createElement("a")
                articleUrl.classList = "article_url"
                articleUrl.textContent = "Read More"
                articleUrl.href = currentArticle.url
                articleUrl.target = "_blank";
                articleDescription.appendChild(articleUrl)

                // additional info: p child of section
                const articleInfo = document.createElement("p")
                articleInfo.classList = "article_info"
                articleInfo.textContent = "Location:   " + currentArticle.location +  "  |  Event Type:   " + currentArticle.typeOfEvent + "  |  Victims:   " + currentArticle.victims + "  |  Witnesses:   " + currentArticle.witnesses + "  |  Agencies:   " + currentArticle.lawEnfAgency
                articleSection.appendChild(articleInfo)


            }
    )
}

articleDomBuilder()

