//Create database, table in database, content for table in database

//Database
const FinancialDatabase = {}

//Table
FinancialDatabase.details = []

//Content
FinancialDatabase.details.push(
    {
        header: "Potential Bankroll",
        content: ["Suspected of receiving funding from 'hacktivists'" , "Paid speaking engagements" , "Unconfirmed support from the Russian Federation"]
    },//FinancialDatabase.details.content.forEach()
    {
        header: "Associated Businesses",
        content: ["At the time of this site launch there are no known businesses directly or indirectly under Edward Snowden's name. He has venhemently denied any illict money making schemes regarding his activities as a whistleblower."]
    },
    {
        header: "Alleged Blackmail Victim(s)",
        content: ["Edward Snowden is blackmailing the United States Government. No evidence of monetary blackmail has been committed. However, some suspect Snowden has a 'dead-man's-switch' in place if he is suspiciously harmed."]
    },
    {
        header: "Known Money Laundering Schemes",
        content: ["From the known, assumed, and alleged revenue streams there is no suspected channels of money laundering associated with Edward Snowden."]
    }
)

// Save database to local storage
localStorage.setItem(
    "FinancialDatabase",
    JSON.stringify(FinancialDatabase)
)