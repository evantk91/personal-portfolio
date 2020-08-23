const context = {
    blogs: [
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
            title: "How to Unroll a Matrix: a Look into a Common Interview Question",
            url: "https://medium.com/@etgreer91/how-to-unroll-a-matrix-a-look-into-a-common-interview-question-61684e270f03",
            photo_src: "./photos/unroll_a_matrix.jpeg"
        },
        {
            title: "Templating with Handlebars Javascript Library",
            url: "https://medium.com/@etgreer91/templating-with-handlebars-javascript-library-faffd83626b5",
            photo_src: "./photos/handlebars.png"
        },
        {
            title: "Introduction to Terraform",
            url: "https://medium.com/@etgreer91/introduction-to-terraform-25688c6df612",
            photo_src: "./photos/1_etej6CTBPY8VLaGLGiIhQw.png"
        }
    ]
}

const source = document.getElementById("blogs-template").innerHTML
const template = Handlebars.compile(source)

const compliedHTML = template(context)

const blogsContainer = document.getElementById('blogs-container')
blogsContainer.innerHTML = compliedHTML