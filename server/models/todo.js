const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    task: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true,
        default: ''
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    completedAtTime: {
        type: Number,
        default: null
    },
    completeByTime: {
        type: Number,
        default: null,
        required: true
    },
    _creator: {
        required: true,
        type: mongoose.Schema.Types.ObjectId
    },
    _category: {
        required: true,
        type: mongoose.Schema.Types.ObjectId
    },
    _group: {
        required: true,
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = {
    Todo
}