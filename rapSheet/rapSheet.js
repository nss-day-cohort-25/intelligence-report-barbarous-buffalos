//Set up database
const TroubleDB = {}

// Article(crimes) table in database
TroubleDB.crimes = []

// Add articles to the article(crimes) table in the article database

// List of alleged crimes.
// List of convictions.
// List of prisons where suspect was incarcerted. Be sure to list begin and end times.
// Any witnesses to their crimes.
// Victims, if any, of their crimes.
TroubleDB.crimes.push(
     {
        crimeName: "Theft of Government Property",
        conviction:true,
        witnesses:"US Government",
        victims:"USA Citizens",
        prisons: [
            {
                name: "ADX Florence",
                start: "01/01/2016",
                end: "02/01/16",
                location: "Florence, CO"
            },
            {
                name: "Fort Leavenworth",
                start: "03/01/16",
                end: "04/01/16",
                location: "Fort Leavenworth, Kansas"
            },
            {
                name: "Black Dolphin",
                start: "01/07/2017",
                end: "01/01/2018",
                location: "Russia"
            },
        ]
    },

        {
        crimeName: "Unauthorized Communication of National Defence Information",
        conviction: false,
        witnesses:"US Government",
        victims:"USA Citizens",
        prisons: [
            {
                name: "ADX Florence",
                start: "01/01/2016",
                end: "02/01/16",
                location: "Florence, CO"
            },
            {
                name: "Fort Leavenworth",
                start: "03/01/16",
                end: "04/01/16",
                location: "Fort Leavenworth, Kansas"
            },
            {
                name: "Black Dolphin",
                start: "01/07/2017",
                end: "01/01/2018",
                location: "Russia"
            }
        ]
    },

        
        {crimeName: "Willful Communication of Classified Communications Intelligence Information to an Unauthorized Person",
        conviction: false,
        witnesses:"US Government",
        victims:"USA Citizens",
        prisons: [
            {
                name: "ADX Florence",
                start: "01/01/2016",
                end: "02/01/16",
                location: "Florence, CO"
            },
            {
                name: "Fort Leavenworth",
                start: "03/01/16",
                end: "04/01/16",
                location: "Fort Leavenworth, Kansas"
            },
            {
                name: "Black Dolphin",
                start: "01/07/2017",
                end: "01/01/2018",
                location: "Russia"
            }
        ]
    }
)
//Identify the location in the DOM to put the rapsheet info
const CrimesInDom = document.querySelector("#rapsheet")

//Function to put the DOM components into html
const CrimesDomBuilder = () => {

    // Create a block element that will hold one crimes each
    let crimes = document.createElement("div")
    crimes.className = "crimes"


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

