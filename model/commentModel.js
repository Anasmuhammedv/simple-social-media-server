import mongoose from 'mongoose'

const commentSchema = mongoose.Schema({
    comment:{
       type:String,
       required:true
    },

    postId:{
       type:mongoose.Schema.Types.ObjectId,  //store object so we can get refernce of document
       required:true,
       ref:"Posts"
    },

  userId:{
   type:mongoose.Schema.Types.ObjectId,
   required:true,
   ref:'Users'
}
})

const commentModel =new mongoose.model('Comments',commentSchema)

export default commentModel