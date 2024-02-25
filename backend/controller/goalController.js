

//  setup async Handler ; 
const asyncHandler =require('express-async-Handler');


// @desc  get goal 
//@route  GET   /api/goals
// acess private 
const getGoals = asyncHandler( async (req, res) => {
    res.status(200).json({ "messgae" : "get goals"})
})


// @desc  set goal 
//@route  POST /api/goals
// acess private 
const setGoal =  asyncHandler( async (req, res) => {
    console.log(req.body) ; 
    res.status(200).json({ "messgae" : "set goal"})
})

// @desc  get goal 
//@route  PUT /api/goals/:id
// acess private 
const updateGoal = asyncHandler( async (req, res) => {
    res.status(200).json({ "messgae" : "update goal" , "updated id  is " : req.params.id})
})

// @desc  delete goal 
//@route  DELETE /api/goals/:id
// acess private 
const deleteGoal = asyncHandler( async (req, res) => {
    res.status(200).json({ "messgae" : "delete goal" , "deleted  id  is " : req.params.id})
})

module.exports ={
    getGoals ,
    setGoal ,
    updateGoal,
    deleteGoal
}