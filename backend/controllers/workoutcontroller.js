const WorkoutModel = require('../models/workoutmodel');
const mongoose = require('mongoose');

const getWorkouts = async (req, res) => {
    const workouts = await WorkoutModel.find({}).sort({createdAt: -1})
  
    res.status(200).json(workouts)
  }

const getSingleWorkout = async(req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"No such workout!"})
    }

    const workout = await WorkoutModel.findById(id);
    if(!workout)
    {
        return res.status(404).json({error: "No such workout!"});
    }
    else
        res.status(200).json(workout);
}

const addNewWorkout = async(req,res)=>{
    const{title, reps, weight} = req.body;

    let emptyFields = []

    if(!title)
    {
        emptyFields.push('title')
    }
    if(!reps)
    {
        emptyFields.push('Reps')
    }
    if(!weight)
    {
        emptyFields.push('Weight')
    }

    if(emptyFields.length > 0)
    {
        res.status(400).json({error:'Please fill all the fields!', emptyFields})
    }

    try{
        const workout = await WorkoutModel.create({title,reps, weight});
        res.status(200).json(workout);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const deleteWorkout = async(req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"No such workout!"})
    }

    const workout = await WorkoutModel.findOneAndDelete({_id:id});
    if(!workout)
    {
        return res.status(404).json({error: "No such workout!"});
    }
    else
        res.status(200).json(workout);
}

const updateWorkout = async(req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"No such workout!"})
    }

    const workout = await WorkoutModel.findOneAndUpdate({_id:id}, {...req.body});
    if(!workout)
    {
        return res.status(404).json({error: "No such workout!"});
    }
    else
        res.status(200).json(workout);
}

module.exports = {
    getWorkouts,
    getSingleWorkout, 
    addNewWorkout,
    deleteWorkout,
    updateWorkout
};