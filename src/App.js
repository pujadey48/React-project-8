import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import RightPanel from "./components/RightPanel/RightPanel";
import Question from "./components/Question/Question";

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
      <div className="row ">
        <div className="col-9 bg-light row-cols-md-1">
          <Header></Header>
          <Cards handleAddToActivity={handleAddToActivity}></Cards>
        </div>
        <div className="col-3 row-cols-md-1">
          <RightPanel activityTime={activityTime}></RightPanel>
        </div>
      </div>
      <Question></Question>
    </div>
  );
}

export default App;
