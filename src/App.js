import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import RightPanel from "./components/RightPanel/RightPanel";

function App() {
  const [activityTime, setActivityTime] = useState([]);

  const handleAddToActivity = (activity) => {
    console.log("clicked", activity);
    let time = 0;
    if(activityTime){
      time = parseInt(activityTime);
    }
    setActivityTime(time + parseInt(activity.time))
  };

  useEffect(() => {
    setActivityTime(0);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-9 bg-light">
          <Header></Header>
          <Cards handleAddToActivity={handleAddToActivity}></Cards>
        </div>
        <div className="col-3">
          <RightPanel activityTime={activityTime}></RightPanel>
        </div>
      </div>
    </div>
  );
}

export default App;
