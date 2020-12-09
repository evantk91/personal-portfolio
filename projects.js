const context = {
    projects: [
        {
            title: "Bonsai Tree Marketplace",
            description: "Full stack e-commerce web application for a client's bonsai Tree selling business based out of Honolulu, Hawaii",
            tech: "React, Express.js",
            project_photo: "./photos/2_Bonsai_-_Delosperma_cooper_formal_upright.jpg",
            github_url: "https://github.com/evantk91/bonsai-shop-api",
            deployed: false,
            private: false
        },
        {
            title: "Maripilot Website",
            description: "Full stack web application for MariPilot, a startup based in Boise, Idaho. MariPilot participated in the 2020 Boise Startup Week. I served as a lead engineer on the software development team. My team developed the user interface that hosts a business planning tool developed by the founder and his advisors and a custom forum connecting players in the aquaculture industry. The user interface is built in React and the backend is written in Ruby on Rails. The user login uses JWT authentication. The user information and messages are stored in a PostgreSQL relational database. We created admin privileges allowing for the moderation and management of the forum by the founder and his advisors.",
            tech: "React, Ruby on Rails",
            project_photo: "./photos/Maripilot_Logo.png",
            deployed: false,
            private: true
        },
        {
            title: "Rave Mom",
            description: "Personalized browser based game built in the Phaser 3 JavaScript library. I developed Rave Mom for my capstone project at the Flatiron School Denver. I took inspiration from my love of music festivals and the classic Bomberman game. I learned the Phaser 3 library over the course of a week before building the game in two weeks. I wrote the backend in Ruby on Rails. User information and scores are stored in a PostgreSQL relational database. I used JWT authentication is used for the user login. The game is deployed on Google Firebase and Heroku.",
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