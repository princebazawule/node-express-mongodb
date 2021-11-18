const express = require("express")
const cors = require("cors")
const morgan = require('morgan')
require('dotenv').config()

// create express app
const app = express()

// logging
app.use(morgan("dev"))

// use cors
let corsOptions = {
  origin: "http://localhost:8081",
}
app.use(cors(corsOptions))

// parse requests content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse requests of content-type: application/json
app.use(express.json())

const db = require("./app/models")
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!")
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err)
    process.exit()
  })

// routes
require("./app/routes/tutorial.routes")(app)

// initial route
app.get("/", (req, res) => {
  res.send("welcome to the princeb Express MongoDB app")
})

// set port
const PORT = process.env.PORT || 8082

// listen for requests
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
