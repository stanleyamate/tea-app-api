//newTea function for post tea route

const newTea =  (req, res, next) =>{
    res.json({message: "Post new tea"}); //dummy for now
};

module.exports = { newTea };