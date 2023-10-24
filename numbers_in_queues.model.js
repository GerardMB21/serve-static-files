const { dbConnect, DataTypes } = require('./db');

//Model table
const Numbers_in_queues = dbConnect.define('numbers_in_queues', {
    number: {
        type: DataTypes.BIGINT
    },
    stateId: {
        type: DataTypes.INTEGER
    },
    campId: {
        type: DataTypes.INTEGER
    },
    queue_name: {
        type: DataTypes.STRING
    },
    created: {
        type: DataTypes.BIGINT
    },
    updated: {
        type: DataTypes.BIGINT
    },
    calls1: {
        type: DataTypes.INTEGER
    }
});

module.exports = {
    Numbers_in_queues
};