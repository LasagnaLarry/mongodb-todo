const mongoose = require('mongoose');
const { Todo } = require('./todo');

var categorySchema = mongoose.Schema({
    categoryName: {
        type: String,
        unique: true,
        required: true,
        minlength: 1,
        trim: true
    },
    _creator: {
        required: true,
        type: mongoose.Schema.Types.ObjectId
    },
    creatorName: {
        required: true,
        type: String
    },
});

categorySchema.pre('findOneAndRemove', function (next) {
    // Todo.findOne({ _category: this._id}, (err, todo) => {
    //     todo.remove();
    // });
    // next();
    console.log('Start');
    console.log(this._id);
    Todo.find({}, (err, docs) => {
        if (err)
            console.log(err);
        console.log(docs);
    });
    Todo.deleteMany({ _category: this._id}, (err) => console.log(err));
    console.log('End')
    next();
});

var Category = mongoose.model('Category', categorySchema);

module.exports = {
    Category
}