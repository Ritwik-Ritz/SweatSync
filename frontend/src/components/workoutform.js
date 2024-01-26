import { useState } from "react"
import { UseWorkoutContext } from "../hooks/useWorkoutContext";
import {UseAuthContext} from "../hooks/useAuthContext";

const WorkoutForm = ()=>{

    const {dispatch} = UseWorkoutContext();
    const {user} = UseAuthContext();

    const [title, setTitle] = useState("");
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async(event)=>{
        event.preventDefault()

        if(!user)
        {
            setError("You must be logged in!");
            return;
        }
        const workout = {title, weight, reps};
        const response = await fetch('http://localhost:4000/api/workouts', {method:'POST',
                                                     body:JSON.stringify(workout), 
                                                     headers:{'Content-Type':'application/json',
                                                     'Authorization':`Bearer ${user.token}`}})
        const json = await response.json();

        if(!response.ok)
        {
            setError(json.error);
            setEmptyFields(json.emptyFields)
        }

        if(response.ok)
        {
            setTitle('');
            setWeight('');
            setReps('');
            setError(null);
            setEmptyFields([])
            dispatch({type:'CREATE_WORKOUT', payload:json})
        }
    }

    return(
        <form action="" className="create" onSubmit={handleSubmit}>
            <h3>Add New Workout</h3>
            <label>Exercise Title</label>
            <input type="text" value= {title} onChange={(e)=> setTitle(e.target.value)} 
            className={emptyFields.includes('title') ? 'error':''}/>
            <label>Exercise Weight</label>
            <input type="number" value= {weight} onChange={(e)=> setWeight(e.target.value)} 
            className={emptyFields.includes('Weight') ? 'error':''}/>
            <label>Exercise Reps</label>
            <input type="number" value= {reps} onChange={(e)=> setReps(e.target.value)} 
            className={emptyFields.includes('Reps') ? 'error':''}/>
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm;