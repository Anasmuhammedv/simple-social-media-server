import likeModel from "../model/likeModel.js";
import postModel from "../model/postModel.js";


//1------Like a post
export const createLike = async(req,res)=>{
    const{id,postId} = req.params
    //check weather already liked or not

    const alreadyLiked = await likeModel.findOne({userId:id,postId:postId})
    if(alreadyLiked){
        return res.json({message:"you already liked this post"})
    }

    const likesCreate = new likeModel({
        userId:id,
        postId:postId,
    })

    await likesCreate.save()
    return res.status(201).json({message:'liked successfully',data:likesCreate})
}


//2-----unlike the comment if its liked

export const unlike = async(req,res)=>{
    const {id,postId} = req.params
    const unlikePost = await likeModel.findOneAndDelete({postId:postId,userId:id})
    return res.status(201).json({messaage:"successfully unliked ",data:unlikePost})
}


//3-----get all counts of likes of unique post
export const getAllLikes = async (req, res) => {
  const { id } = req.params;
    
   //gives the number of document present in like document based on postId
 const likeCount = await likeModel.countDocuments({ postId: id });
    
    //Add a field in postModel to store noof document
 const editedPostCount = await postModel.findByIdAndUpdate(id,{likeCount:likeCount},{new:true})

 await editedPostCount.save()

    res.status(200).json({ likeCount });
  } 
