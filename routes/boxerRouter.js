const express = require("express")
const boxerRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const boxers= [
    { name: "Iron Mike Tyson", age:54, _id:uuidv4()},
    { name: "Manny Pac-Man Pacquiao", age:41, _id:uuidv4()},
    { name: "Floyd Mayweather Jr.", age:44, _id:uuidv4()},
    { name: "Terence Bud Crawford", age:33, _id:uuidv4()},
    { name: "Errol the Truth Spence Jr.", age:30, _id:uuidv4()}
]

boxerRouter.route("/")
    .get((req, res) => {
        res.send(boxers)
    })
    .post ((req, res) => {
        const newBoxer = req.body
        newBoxer._id = uuidv4()
        boxers.push(newBoxer)
        res.send(`Successfully added ${newBoxer.name} to the database`)
    })

module.exports = boxerRouter