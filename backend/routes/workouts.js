const express = require('express');
const mongoose = require('mongoose');
const workoutcontroller = require('../controllers/workoutcontroller')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

//requireAuth ensures that user is able to access workouts only if they are logged in
router.use(requireAuth);

router.get('/', workoutcontroller.getWorkouts);

router.get('/:id', workoutcontroller.getSingleWorkout);

router.post('/', workoutcontroller.addNewWorkout);

router.delete('/:id', workoutcontroller.deleteWorkout);

router.patch('/:id', workoutcontroller.updateWorkout);

module.exports  = router;