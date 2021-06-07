const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    login: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
});

module.exports = List = mongoose.model("List", ListSchema);