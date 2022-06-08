const asyncHandler = require('express-async-handler')

//@desc GET gaols
//@route GET/api/goals
// @access Private
const getGoals = asynHandler(async(req, res)=> {
  res.status(200).json({message : 'get goal'})
})

//@desc POST gaols
//@route POST/api/goals
// @access Private
const setGoals = asynHandler(async(req, res)=> {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text')
    }
    res.json({message : "set all goalsss"})
  })

//@desc PUT gaols
//@route PUT/api/goals/:id
// @access Private
const updateGoals = asynHandler(async(req, res)=> {
    res.json({message : `Update goal ${req.params.id}`})
  })

//@desc DELETE gaols
//@route GET/api/goals/:id
// @access Private
const delteGoals = asynHandler(async(req, res)=> {
    res.json({message : `delete goal ${req.params.id}`})
  })


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    delteGoals,

}