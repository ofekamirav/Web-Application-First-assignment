const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    post_id: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const Comments = mongoose.model('Comments', commentSchema);
module.exports = Comments;