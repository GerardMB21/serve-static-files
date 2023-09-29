const express = require('express')
const app = express();

app.use(express.static('../monitor'))

app.listen(3000, (req, res) => {
  console.log("server already")
})