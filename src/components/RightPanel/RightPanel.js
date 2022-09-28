import React from "react";

const RightPanel = () => {
  return (
    <div className="container">
      <div className="d-flex">
        <img src="favicon.ico" />
        <h3>Puja dey</h3>
      </div>

      <div className="d-flex justify-content-around border border-0 rounded-3 bg-light mt-4 ">
        <div className="mt-2">
          <h6>59kg</h6>
          <p>Weight</p>
        </div>

        <div className="mt-2">
          <h6>6.5</h6>
          <p>Height</p>
        </div>

        <div className="mt-2">
          <h6>29yrs</h6>
          <p>Age</p>
        </div>
      </div>
    <h3>Add A Break</h3>

    </div>


  );
};

export default RightPanel;
