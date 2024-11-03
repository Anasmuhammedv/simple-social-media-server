import userModel from "../model/userUser.js";


//1-------------create the user (Signup)

export const createUser = async(req,res)=>{
 
    const {name,email,password} = req.body

        const userCreate =new userModel({
            name:name,
            email:email,
            password:password
        })
        await userCreate.save()
        return res.status(201).json({message:"user created successfully",data:userCreate})
    } 


//2---------Login the user (sign in)

export const loginUser = async(req,res)=>{
    const {email,password} = req.body
    
    const userAvailable = await userModel.findOne({email:email})
    if(!userAvailable){
        return res.status(404).json({message:"user not found"})
    }

    if(userAvailable.password == password){
        return res.status(200).json({"message":"user logged successfully" ,data:userAvailable})
    }
}


//3-----get a user detail

export const getAuser = async(req,res)=>{
    const{id}=req.params
    const user = await userModel.findOne({_id:id})
    return res.status(200).json({message:"userfetched successfully",data:user})
}

//4--------update the user

export const updateUser  = async(req,res)=>{
    const{id} = req.params
    const{data} = req.body

    const updatedUser = await userModel.findByIdAndUpdate(id,data,{new:true})

    return res.status(201).json({message:"userUpdated successfully" , data:updateUser})
}

