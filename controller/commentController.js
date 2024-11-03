import commentModel from "../model/commentModel.js";


//create comment
export const commentCreate = async(req,res)=>{
    const{id,postId} = req.params
    const {comment} = req.body

    const comments = new commentModel({
        userId:id,
        postId:postId,
        comment:comment
    })

    await comments.save()

    return res.status(201).json({message:"comment create successfully",data:comments})

}


//get unique post comment

export const getPostComment = async (req, res) => {
      const { id } = req.params;
  
      const userPostComments = await commentModel
        .find({ postId: id })
        .populate('userId', 'name') //get user document and only select name
        .select('comment userId'); //retrieve comment and useriD TO frontend
  
      return res.status(200).json({ message: "Successfully fetched all comments", data: userPostComments });
    } 
 
  


