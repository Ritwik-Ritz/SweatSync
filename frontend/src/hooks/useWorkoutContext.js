import { WorkoutContext } from "../context/workoutcontext";
import { useContext } from "react";

export const UseWorkoutContext = () =>{
    const context = useContext(WorkoutContext);

    if(!context)
    {
        throw Error("Not wrapped by WorkoutContextProvider");
    }

    return context;
}