require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { numbersInQueuesRouter } = require('./numbers_in_queues.route');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Cambia esto por tu origen real
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
else app.use(morgan('combined'));

app.use(express.static('../monitor'));

app.use("/api/v1", numbersInQueuesRouter);

const { dbConnect } = require('./db');

dbConnect.authenticate()
	.then(() => console.log('Db authenticated'))
	.catch(err => console.log(err));

dbConnect.sync()
	.then(() => console.log('Db synced'))
	.catch(err => console.log(err));

app.listen(3000, (req, res) => {
  console.log("server already")
})