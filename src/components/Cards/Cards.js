import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = (props) => {
  const [activities, setActivities] = useState([]);

  const {handleAddToActivity} = props;

  useEffect(() => {
    fetch("activities.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div>
      <h3>Select today's sports</h3>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 g-4 mt-5">
        {activities.map((activity) => (
          <Card
            key={activity.id}
            activity={activity}
            handleAddToActivity={handleAddToActivity}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
