const mongoose = require('mongoose');

const resourcesScheme = mongoose.Schema({
    catagory: {type: String},
    title: {type: String},
    url: {type: String},
    thumbnail: {type: String},
    dateAdded: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('resources', resourcesScheme)