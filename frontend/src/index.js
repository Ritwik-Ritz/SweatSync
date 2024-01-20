import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WorkoutContextProvider from './context/workoutcontext';
import { AuthContextProvider } from './context/authContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutContextProvider>
        <App/>
      </WorkoutContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);


