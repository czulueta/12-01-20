const express = require("express")
const movieRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const movies= [
    { title: "Fight Club", genre: "action", _id: uuidv4()},
    { title: "007", genre: "action", _id: uuidv4()},
    { title: "Arq", genre: "sci-fi", _id: uuidv4()},
    { title: "Superman", genre: "action", _id: uuidv4()}
]


movieRouter.route("/")
    .get((req, res) => {
        res.send(movies)
    })
    .post((req,res) => {
        const newMovie = req.body
        newMovie._id = uuidv4()
        movies.push(newMovie)
        res.send(`Successfully added ${newMovie.title} to the database ahch!!!`)
    })

module.exports = movieRouter