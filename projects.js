const context = {
    projects: [
        {
            title: "Rave Mom",
            description: "Personalized browser based game built in the Phaser 3 JavaScript library. Rave Mom is a one player survival game with a scoring system that is a variation on the classic Bomberman game. The back end is written in Ruby on Rails. The user's information and scores are stored in a PostgreSQL relational database. JWT authentication is used for the user login. The game is deployed on Google Firebase and Heroku.",
            tech: "Phaser 3, JavaScript, Ruby on Rails, Heroku, Google Firebase",
            demo_url: "./demos/Rave_Mom_Demo.mp4",
            github_url: "https://github.com/evantk91/rave-mom-app",
            deployed: true,
            deployed_url: "https://rave-mom.firebaseapp.com/"
        },
        {
            title: "Three Card Poker",
            description: "Full stack web application that simulates the three card poker casino game. The single page front end user interface is written in vanilla JavaScript and the back end is written in Ruby on Rails. The user's information and scores are stored in a PostgreSQL relational database. JWT authentication is used for user login. The application is deployed on Heroku and Google Firebase.",
            tech: "JavaScript, Ruby on Rails, Heroku, Google Firebase",
            github_url: "https://github.com/evantk91/three-card-poker-frontend", 
            demo_url: "./demos/Three_Card_Poker_Demo.mp4",
            deployed: false,
        }
    ]
}

const source = document.getElementById("projects-template").innerHTML
const template = Handlebars.compile(source)

const compliedHTML = template(context)

const blogsContainer = document.getElementById("projects-container")
blogsContainer.innerHTML = compliedHTML