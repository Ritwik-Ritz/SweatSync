import { useEffect } from "react"
import { UseWorkoutContext } from "../hooks/useWorkoutContext";
import {UseAuthContext} from "../hooks/useAuthContext";

// components
import WorkoutDetails from "../components/workoutdetails"
import WorkoutForm from '../components/workoutform';

const Home = () => {
  const { workouts, dispatch } = UseWorkoutContext()
  const {user} = UseAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts/', {headers:{'Authorization':`Bearer ${user.token}`}})
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUT', payload: json})
      }
    }

    if(user)
    {
      fetchWorkouts()
    }
  }, [dispatch, user])

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