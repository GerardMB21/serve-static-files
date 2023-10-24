const express = require('express');

//controllers
const { create, get } = require('./numbers_in_queues.controller');

const numbersInQueuesRouter = express.Router();

//htttp://localhost:port/api/v1/numbers_in_queues GET,POST,DELET,PUT
numbersInQueuesRouter.post("/numbers-in-queues", create);
numbersInQueuesRouter.get("/numbers-in-queues", get);

module.exports = { numbersInQueuesRouter };