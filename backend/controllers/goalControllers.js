const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

//@desc GET gaols
//@route GET/api/goals
// @access Private
const getGoals = asyncHandler(async(req, res)=> {
  const goals = await Goal.find()

  res.status(200).json(goals)
})

//@desc POST gaols
//@route POST/api/goals
// @access Private
const setGoals = asyncHandler(async(req, res)=> {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text')
    }
    const goal = await Goal.create({
      text: req.body.text
    })

    res.json(goal)
  })

//@desc PUT gaols
//@route PUT/api/goals/:id
// @access Private
const updateGoals = asyncHandler(async(req, res)=> {
    
    const goal = await Goal.findById(req.params.id)
    if(!goal){
      res.status(400)
      throw new Error('goal not found')
    }

    const updateGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,
      {
        new:true,
      })

    res.json(updateGoal)
  })

//@desc DELETE gaols
//@route GET/api/goals/:id
// @access Private
const delteGoals = asyncHandler(async(req, res)=> {

  const goal = await Goal.findById(req.params.id)
  if(!goal){
    res.status(400)
    throw new Error('goal not found')
  }

  await goal.remove()

  // const deleteGoal = await Goal.findByIdAndRemove(req.params.id,req.body,)
  // const deleteGoal = await Goal.findByIdAndDelete(req.params.id,req.body,)
    res.json({id : req.params.id})
  })


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    delteGoals,

}