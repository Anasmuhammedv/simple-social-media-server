import mongoose from 'mongoose'


const postSchema = mongoose.Schema({
    image:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/512/17/17004.png" //gives a default image
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,    //store object so we can get refernce of document
        required:true,
        ref:'Users'
    },
    likeCount:{
        type:Number,
        default:0
    }

})

const postModel = new mongoose.model('Posts',postSchema)
export default postModel



