import mongoose  from 'mongoose'

const todoSchema = new mongoose.Schema({
    description : {
        type : String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('todo', todoSchema);
