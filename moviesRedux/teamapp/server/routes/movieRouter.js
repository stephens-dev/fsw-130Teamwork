const express = require("express")
const moviesRouter = express.Router()
const {v4: uuidv4} = require("uuid")


const movies = [
    {title: "Die Hard", genre: "Action", _id: uuidv4() },
    {title: "Conjuring", genre: "Horror", _id: uuidv4() },
    {title: "Mulan", genre: "Fantasy", _id: uuidv4() },
    {title: "Harry Potter and the Chamber of Secrets", genre: "Fantasy", _id: uuidv4() },
    {title: "Star Wars IV", genre: "SIFI", _id: uuidv4() },
    {title: "White Chicks", genre: "Comedy", _id: uuidv4() }

]

moviesRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase())
    res.send(filteredMovies)
})
moviesRouter.route("/:moviesId")
    .get((req, res) => {
        const moviesId = req.params.moviesId
        const foundMovies = movies.find(movie => movie._id === moviesId)
        res.send(foundMovies)
    })
    .put((req, res) => {
        const movieId = req.params.moviesId
        const updateMovie = req.body
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        const updatedMovie = Object.assign(movies[movieIndex], updateMovie)
        res.send(`${updatedMovie.title} Has been Updated`)
    })
    .delete((req, res) => {
        const movieId = req.params.moviesId
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        movies.splice(movieIndex, 1)
        res.send(`Movie with id of ${movieId} of has been deleted`)
    })
    

moviesRouter.route("/")
    .get((req, res) => {
        res.send(movies)
    })
    .post((req, res) => {
        const newMovie = req.body
        newMovie._id = uuidv4()
        movies.push(newMovie)
        res.send(`${newMovie.title} Has been Added`)
    })


    module.exports = moviesRouter