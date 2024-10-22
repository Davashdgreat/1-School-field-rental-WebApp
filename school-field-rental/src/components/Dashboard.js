import React from 'react';

import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const login = (newUser) => {
    dispatch({ type: "LOGIN", payload: newUser });
  };

  return <div>Welcome, {user?.name}</div>;
};

export default Dashboard;

