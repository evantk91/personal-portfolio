const context = {
    blogs: [
        {
            title: "How to Render Likes on a Page",
            url: "https://medium.com/@etgreer91/how-to-render-likes-on-a-page-4d660e7ea5e4",
            photo_src: "./photos/prateek-katyal-xv7-GlvBLFw-unsplash.jpg" 
         },
        {
           title: "The Main Principles of Object Oriented Programming",
           url: "https://medium.com/@etgreer91/the-main-principles-of-object-oriented-programming-45506517865d",
           photo_src: "./photos/ben-ashby-TAqEFzBEKbY-unsplash.jpg" 
        },
        {
            title: "Implementing Authorization in Ruby on Rails",
            url: "https://medium.com/@etgreer91/implementing-authorization-in-ruby-on-rails-65213e9cf7bf",
            photo_src: "./photos/kyle-glenn-dGk-qYBk4OA-unsplash.jpg"
        },
        {
            title: "The Problem Solving Process Using Mocha Testing",
            url: "https://medium.com/@etgreer91/the-problem-solving-process-using-mocha-testing-ac829f63b108",
            photo_src: "./photos/mocha_testing_blog.png"
        },
        {
            title: "How to Unroll a Matrix: a Look into a Common Interview Question",
            url: "https://medium.com/@etgreer91/how-to-unroll-a-matrix-a-look-into-a-common-interview-question-61684e270f03",
            photo_src: "./photos/unroll_a_matrix.jpeg"
        }
    ]
}

const source = document.getElementById("blogs-template").innerHTML
const template = Handlebars.compile(source)

const compliedHTML = template(context)

const blogsContainer = document.getElementById('blogs-container')
blogsContainer.innerHTML = compliedHTML