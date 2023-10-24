//models
const { Numbers_in_queues } = require('./numbers_in_queues.model');

//utils
const { catchAsync } = require("./catchAsync");

//controllers
const create = catchAsync(async (req,res,next)=>{
    const body = req.body;

    try {
        const newNumber = await Numbers_in_queues.create({...body});

        res.status(201).json({
            status: 'success',
            newNumber
        });
    } catch (error) {
        res.status(400).json({
            error
        })
    }
});

const get = catchAsync(async (req,res,next)=>{
    res.status(200).json({
        status: 'success',
    });
});

module.exports = {
    create,
    get
};