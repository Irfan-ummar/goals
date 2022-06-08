const express = require('express')
const router = express.Router()
const {getGoals,setGoals,updateGoals,delteGoals} = require('../controllers/goalControllers')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(delteGoals).put(updateGoals)

// router.get('/', getGoals)
// router.post('/', (req, res)=> setGoals)
// router.put('/:id', updateGoals)
// router.delete('/:id', delteGoals)
module.exports = router 