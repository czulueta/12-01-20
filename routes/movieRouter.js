const express = require("express")
const movieRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const movies= [
    { title: "Fight Club", genre: "action", _id: uuidv4()},
    { title: "007", genre: "action", _id: uuidv4()},
    { title: "Arq", genre: "sci-fi", _id: uuidv4()},
    { title: "Superman", genre: "action", _id: uuidv4()}
]

movieRouter.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find( movie => movie._id === movieId)
    if(!foundMovie){
        const error = new Error(`The item with id ${movieId} was not found.`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundMovie)
})
movieRouter.get("/search/genre", (req, res, next) => {
    const genre = req.query.genre
    if(!genre){
        const error = new Error("You must provide a genre")
        res.status(500)
        return next(error)
    }
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.status(200).send(filteredMovies)
})
movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex( movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("Successfully deleted movie")
})
movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId 
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.status(201).send(updatedMovie)
})
movieRouter.route("/")
    .get((req, res) => {
        res.status(200).send(movies)
    })
    .post((req,res) => {
        const newMovie = req.body
        newMovie._id = uuidv4()
        movies.push(newMovie)
        res.status(201).send(newMovie)
    })

module.exports = movieRouter