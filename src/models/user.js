const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    identification: {
        type: Number,
        require: true
    },
    numero: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('User', userSchema);