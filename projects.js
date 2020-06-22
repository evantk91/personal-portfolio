const context = {
    projects: [
        {
            title: "Maripilot Website",
            description: "Full stack web application for the Maripilot Company. The user interface allows for users to use a business planning tool and a messaging board to connect with other users. The user interface is built in React and the backend is written in Ruby on Rails. The user information and messages are stored in a PostgreSQL relational database. JWT authentication is used for user login. An administration login is created for the moderation and management of the messaging board.",
            tech: "React, Ruby on Rails",
            project_photo: "./photos/Maripilot_Logo.png",
            private: true
        },
        {
            title: "Rave Mom",
            description: "Personalized browser based game built in the Phaser 3 JavaScript library. Rave Mom is a one player survival game with a scoring system that is a variation on the classic Bomberman game. The back end is written in Ruby on Rails. The user's information and scores are stored in a PostgreSQL relational database. JWT authentication is used for the user login. The game is deployed on Google Firebase and Heroku.",
            tech: "Phaser 3, JavaScript, Ruby on Rails, Heroku, Google Firebase",
            project_photo: "./photos/Rave_Mom_Screenshot.png",
            demo_url: "https://www.youtube.com/watch?v=3kBx_M08VB8&t=17s",
            github_url: "https://github.com/evantk91/rave-mom-app",
            deployed: true,
            deployed_url: "https://rave-mom.firebaseapp.com/",
            private: false
        },
        {
            title: "Three Card Poker",
            description: "Full stack web application that simulates the three card poker casino game. The single page front end user interface is written in vanilla JavaScript and the back end is written in Ruby on Rails. The user's information and scores are stored in a PostgreSQL relational database. JWT authentication is used for user login. The application is deployed on Heroku and Google Firebase.",
            tech: "JavaScript, Ruby on Rails, Heroku, Google Firebase",
            project_photo: "./photos/Three_Card_Poker_Screenshot.jpg",
            demo_url: "https://www.youtube.com/watch?v=T3Eti6dAlXk&t=6s",
            github_url: "https://github.com/evantk91/three-card-poker-frontend",
            deployed: false,
            private: false
        }
    ]
}

const source = document.getElementById("projects-template").innerHTML
const template = Handlebars.compile(source)

const compliedHTML = template(context)

const blogsContainer = document.getElementById("projects-container")
blogsContainer.innerHTML = compliedHTML