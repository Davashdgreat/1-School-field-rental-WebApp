import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './components/Dashboard';
import Booking from './components/Booking';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, logout } from './store/authSlice';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';


const App = () =>{

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate(); // Use useNavigate hook

  const handleLogin = (role) => {
    dispatch(loginStart(role));  // Login with role
  };

  const handleRedirect = () => {
    navigate('./components/Dashboard'); // Redirect to Dashboard
  };

  return (
    // <Router>
    //   <Routes>
    //     {/* Public Routes */}
    //     <Route path="/login" element={<loginStart />} />

    //     {/* Private Routes */}
    //     <Route
    //       path="/dashboard"
    //       element={
    //         <PrivateRoute role="school">  {/* Only 'school' role can access */}
    //           <Dashboard />
    //         </PrivateRoute>
    //       }
    //     />
    //     <Route
    //       path="/booking"
    //       element={
    //         <PrivateRoute role="renter">  {/* Only 'renter' role can access */}
    //           <Booking />
    //         </PrivateRoute>
    //       }
    //     />
    //   </Routes>
    // </Router>

    <Layout>
      <div className="bg-gray-100 p-4">
        <TextField label="Enter Name" variant="outlined" fullWidth />
      </div>
      <div className="bg-gray-200 p-4">
        <Button variant="contained" color="primary" onClick={handleRedirect}>
          Go to Dashboard
        </Button>
      </div>
      <div className="bg-gray-300 p-4">Content Block 3</div>
    </Layout>

  )
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default App;
