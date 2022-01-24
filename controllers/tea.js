//newTea function for post tea route
import Tea, { findOne, find, deleteMany, deleteOne } from "../models/tea";

const newTea =  (req, res, next) =>{
    
    //check if tea name already exist in the database
    findOne({ name : req.body.name}, (err, data)=>{
        
        //if is not in the database then add
        if(!data){
            const newTea = new Tea({
                name:req.body.name,
                image: req.body.image, // placeholder for now
                description: req.body.description,
                keywords: req.body.keywords,
                origin: req.body.origin,
                brew_time: req.body.brew_time,
                temperature: req.body.temperature,
            })
            //save this to the database
            newTea.save((err, data)=>{
                if(err) return res.json({Error: "err"});
                return res.json(data);
            })
        }else {
            if(err) return res.json(`Something went wrong pleas try again. ${err}` );
            return res.json({message : "tea already exists"});
        }
    })
    //res.json({message: "Post new tea"}); //dummy for now
};

const getAlltea =  (req, res, next) =>{
    find({}, (err, data)=>{
        if(err) return res.json({Error: `Error getting all Tea ${err}`});
        return res.json(data);
    })
};
const getOneTea =  (req, res, next) =>{
    
    let name = req.params.name;
    
    findOne({name: name}, (err, data)=>{
        
        if(err || !data) return res.json({Error: `failed to get tea with name : ${name} or it doesnt exist`});
        return res.json(data);
    } )
    
};

const deleteAllTea =  (req, res, next) =>{
    
    deleteMany({}, (err, data)=>{
        
        if(!err) return res.json({ message: "all tea deleted successfully"})
        return res.json({Error : "failed: Error deleting all tea product"});
    })
};
const deleteOneTea =  (req, res, next) =>{
    let name = req.params.name;
    
    deleteOne({name: name}, (err, data)=>{
        if(data.Count == 0) return res.json({message: "tea doesnt exist"});
        else if(err) return res.json({Error: `Error deleting ${name}: ${err}`});
        else return res.json({message :`${name} deleted successfully`});
    })
};
const newComment =  (req, res, next) =>{
    
    //getting specific tea
    let name = req.params.name;

    //comment taken from the body
    let newComment = req.body.comment;
    
    //creating a comment object to push
    const comment ={
        text: newComment,
        date: new Date()
    }
    findOne({name:name}, (err, data)=>{
        if(err || !data || newComment == null){
            return res.json({message : "tea doesnt exist"})
        }
        else{
            //add comment to comments array of tea
            data.comments.push(comment);
            
            //save data to db
            data.save(err => {
                if(err){
                    return res.json({message : "error posting comment", error :err})
                }else return res.json(data);
            })
            
        }
    })
    
};

export default { 
    newTea, 
    newComment,
    getAlltea, 
    deleteAllTea,
    deleteOneTea,
    getOneTea 
};