import { Post } from "../models/post.model.js";

//create a post 
const createPost = async (req,res) => {
    try {
        const { name, description,age} = req.body;

        if(!name||!description||!age) {
            return res.status(400).json({
                message:"All field are required! "
            });
        }

        const post = await Post.create({name,description,age});

        res.status(201).json({
            message:"Post created succesfully",post
        });

    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error",error
        })
    }
}

//Read all the post
const getPosts = async (req,res) => {
    try { 
        const posts = await Post.find();
        res.status(200).json(posts);

    } catch (error) {
        res.status(500).json({
            message:"Internal serve Error",error
        })
    }
}


const updatePost = async (req,res) =>{
    try {
        //basic validation to check if the body is empty

        //{name:x,description:y,age:z} -> []
        //{} =truthy value 
        if(Object.keys(req.body).length === 0){
            return res.status(400).json({
                message:"No data provideed for update"
            });
        }

        const post = await Post.findByIdAndUpdate(req.param.id,res.body,
        {new:true});

        if(!post)return res.status(404).json({
            message:"Post not found"
        });

        res.status(201).json({
            message:"Post Updated Successfully",post
        });
    } catch (error) {
         res.status(500).json({
            message:"Internal serve Error",error
        })
    }
}

const deletePost = async (req,res) => {
    try {
        const deleted = await Post.findByIdAndDelete(req.param.id);
        if(!deleted) return res.status.json({
            message:"Post not found"
        });

        res.status(201).json({
            message:"Post successfully deleted"
        }) 
    } catch (error) {
        res.status(500).json({
            message:"Internal serve Error",error
        })
    }
}
export {createPost,getPosts,updatePost,deletePost}; 