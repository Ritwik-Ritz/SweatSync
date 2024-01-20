const express = require('express');
const mongoose = require('mongoose');
const workoutcontroller = require('../controllers/workoutcontroller')
const router = express.Router();

router.get('/', workoutcontroller.getWorkouts);

router.get('/:id', workoutcontroller.getSingleWorkout);

router.post('/', workoutcontroller.addNewWorkout);

router.delete('/:id', workoutcontroller.deleteWorkout);

router.patch('/:id', workoutcontroller.updateWorkout);

module.exports  = router;