import React, { useContext } from "react";
import { UserContext } from "../App";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>You are logged in as {user.email}</p>
    </div>
  );
};

export default Dashboard;
