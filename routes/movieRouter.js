const express = require("express")
const movieRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const movies= [
    { title: "Fight Club", genre: "action", _id: uuidv4()},
    { title: "007", genre: "action", _id: uuidv4()},
    { title: "Arq", genre: "sci-fi", _id: uuidv4()},
    { title: "Superman", genre: "action", _id: uuidv4()}
]

movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find( movie => movie._id === movieId)
    res.send(foundMovie)
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
    res.send(updatedMovie)
})
movieRouter.route("/")
    .get((req, res) => {
        res.send(movies)
    })
    .post((req,res) => {
        const newMovie = req.body
        newMovie._id = uuidv4()
        movies.push(newMovie)
        res.send(newMovie)
    })

module.exports = movieRouter