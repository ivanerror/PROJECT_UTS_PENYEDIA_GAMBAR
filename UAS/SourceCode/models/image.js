const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    source : {
        type : String,
        required : true,
    },
    detail : {
        description : String,
        raw : {
            megapixel : String,
            camera : String,
            iso : String,
            ss : String,
            aperture : String,
        }
    },
    author : {
        type : String,
        required : true,
        ref: "users"
    },
    liked_by : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
    }],
    collect_by : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
    }],
    views : 'Number',
    searchQuery : String,
    createdAt: {
        type: Date,
        default : Date.now,
    }
})

module.exports = mongoose.model('Image', imageSchema);