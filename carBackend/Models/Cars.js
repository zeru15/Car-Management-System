const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    img : {
        type: String,
        required: true
    },
    model : {
        type: String,
        required: true
    },
    dName : {
        type: String,
        required: true
    },
    plateNo: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default:true
    },
    isRequested: {
        type: Boolean,
        default: false
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    requestedBy: {
        type: Schema.Types.ObjectId,
        ref:"user",
        default: null
    },
    approvedFor: {
        type: String
    }
},{timestamps:true})

module.exports = Car = mongoose.model('car' , CarSchema);