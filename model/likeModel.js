import mongoose from 'mongoose'

const likeSchema = mongoose.Schema({
  
    userId:{
      type:mongoose.Schema.Types.ObjectId,  //store object so we can get refernce of document
      ref:'Users'
    },
    postId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Posts"
    }
})

const likeModel = new mongoose.model('Likes',likeSchema)
export default likeModel