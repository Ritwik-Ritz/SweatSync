import { UseWorkoutContext } from '../hooks/useWorkoutContext'
import {format} from 'date-fns';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = UseWorkoutContext()

  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()
    console.log(json)

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.weight}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p><strong>Added On: </strong>{format(new Date(workout.createdAt),'dd-MM-yyyy')}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails