const express = require("express")
const boxerRouter = express.Router()
const { v4: uuidv4 } = require("uuid")


const boxers= [
    { name: "Iron Mike Tyson", age:54, _id:uuidv4(), division:"heavyweight"},
    { name: "Manny Pac-Man Pacquiao", age:41, _id:uuidv4(), division:"welterweight"},
    { name: "Floyd Mayweather Jr.", age:44, _id:uuidv4(), division:"welterweight"},
    { name: "Terence Bud Crawford", age:33, _id:uuidv4(), division:"welterweight"},
    { name: "Errol the Truth Spence Jr.", age:30, _id:uuidv4(), division:"welterweight"}
]
boxerRouter.get("/:boxerId", (req, res) => {
    const boxerId = req.params.boxerId 
    const foundBoxer = boxers.find(boxer => boxer._id === boxerId)
    res.send(foundBoxer)
})
boxerRouter.get("/search/division", (req, res) => {
    const division = req.query.division
    const filteredBoxers = boxers.filter(boxer => boxer.division === division)
    res.send(filteredBoxers)
})
boxerRouter.delete("/:boxerId", (req, res) => {
    const boxerId = req.params.boxerId 
    const boxerIndex = boxers.findIndex(boxer => boxer._id === boxerId)
    boxers.splice(boxerIndex, 1)
    res.send("Successfully retired the boxer!")
})
boxerRouter.put("/:boxerId", (req, res) => {
    const boxerId = req.params.boxerId 
    const boxerIndex = boxers.findIndex(boxer => boxer._id === boxerId)
    const updatedBoxer = Object.assign(boxers[boxerIndex], req.body)
    res.send(updatedBoxer)
})
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