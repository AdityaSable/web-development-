const express = require("express")
const app = express()
const PORT = 5000
app.use(express.static("Public"))
app.listen(PORT)