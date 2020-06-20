const context = {
    blogs: [
        {
            title: "The Problem Solving Process Using Mocha Testing",
            url: "https://medium.com/@etgreer91/the-problem-solving-process-using-mocha-testing-ac829f63b108",
            photo_src: "./photos/mocha_testing_blog.png"
        },
        {
            title: "How to Unroll a Matrix: a Look into a Common Interview Question",
            url: "https://medium.com/@etgreer91/how-to-unroll-a-matrix-a-look-into-a-common-interview-question-61684e270f0",
            photo_src: "./photos/unroll_a_matrix.jpeg"
        },
        {
            title: "Rave Mom: My Love Letter to Raving Culture",
            url: "https://medium.com/@etgreer91/rave-mom-my-love-letter-to-raving-culture-1ccd2a9524f2",
            photo_src: "./photos/rave_mom_blog.png"
        },
        {
            title: "Tackling the Astronomical: my First Hack-a-thon Experience",
            url: "https://medium.com/@etgreer91/tackling-the-astronomical-my-first-hack-a-thon-experience-3d72243fbbee",
            photo_src: "./photos/astronomical_blog.jpeg"
        }

    ]
}


const source = document.getElementById("blogs-template").innerHTML
const template = Handlebars.compile(source)

const compliedHTML = template(context)

const blogsContainer = document.getElementById('blogs-container')
blogsContainer.innerHTML = compliedHTML