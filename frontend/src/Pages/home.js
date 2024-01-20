import { useEffect } from "react"
import { UseWorkoutContext } from "../hooks/useWorkoutContext";

// components
import WorkoutDetails from "../components/workoutdetails"
import WorkoutForm from '../components/workoutform';

const Home = () => {
  const { workouts, dispatch } = UseWorkoutContext()


  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts/', {method:'GET'})
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUT', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home