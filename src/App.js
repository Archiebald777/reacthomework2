import React from "react";
import data from "./data";
import UserCard from "./components/UserCard/UserCard/UserCard";
import "./App.css";
function App() {
  console.log(data);
  return (
    <div className="main-wrapper">
      {data.map((user) => (
        <UserCard user={user}></UserCard>
      ))}
    </div>
  );
}

export default App;
