const express = require('express')
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Cambia esto por tu origen real
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static('../monitor'))

app.listen(3000, (req, res) => {
  console.log("server already")
})