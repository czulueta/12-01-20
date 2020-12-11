const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

app.use("/boxers", require("./routes/boxerRouter.js"))
app.use("/movies", require("./routes/movieRouter.js"))

app.listen(9000, () => {
    console.log("server is running on port 9000!!!")
})