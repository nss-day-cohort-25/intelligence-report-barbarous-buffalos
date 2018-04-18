//Set up db
const KnownAssDB = {}

// Article table in database
KnownAssDB.articles = []

// Add articles to the article table in the article database
KnownAssDB.articles.push(
    {
        title: "Known Associates",
        description: "An Algerian military plane has crashed near the capital killing 257 people on board, officials say. The aircraft came down just after taking off from Boufarik military airport, west of Algiers. An inquiry is under way into the cause of the crash - Algeria's worst-ever air disaster. ",
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

//Save database to local storage
localStorage.setItem(
    "KnownAssDB",
    JSON.stringify(KnownAssDB)
)


