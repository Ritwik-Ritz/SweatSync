const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    title:{type:String, required:true},
    reps:{type:Number, required:true},
    weight:{type:Number, required:true}
},{timestamps:true});

const WorkoutModel = new mongoose.model('workout', workoutSchema);

module.exports = WorkoutModel;