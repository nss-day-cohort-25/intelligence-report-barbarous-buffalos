//Get data out of database
ParsedArticleListDB = JSON.parse(localStorage.getItem("ArticleListDB"))

//Identify the location in the DOM to put the articles info
const listOfArticles = document.querySelector("#articleList")

//Function to put the DOM components into html
const articleDomBuilder = () => {

    // Create a block element that will hold one article each
    let article = document.createElement("div")
    article.className = "articleItem"


    // Iterate over the array of articles in the database

    ParsedArticleListDB.articles.forEach(
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
                    articleSection.classList += " section_high"
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
