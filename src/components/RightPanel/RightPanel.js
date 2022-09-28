import React from "react";

const RightPanel = () => {
  return (
    <div className="container">
      <div className="d-flex mt-5 mb-5">
        <img src="favicon.ico" />
        <h3 className="p-2">Puja dey</h3>
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
      <h3 className="mt-5 mb-5">Add A Break</h3>

      <div className="d-flex justify-content-around border border-0 rounded-3 bg-light p-2 ">
        <p className="bg-white text-dark border rounded-circle mt-3 p-1">
          {" "}
          10m
        </p>
        <p className="bg-white text-dark border rounded-circle mt-3 p-1">
          {" "}
          15m
        </p>
        <p className="bg-white text-dark border rounded-circle mt-3 p-1">
          {" "}
          20m
        </p>
        <p className="bg-white text-dark border rounded-circle mt-3 p-1">
          {" "}
          25m
        </p>
        <p className="bg-white text-dark border rounded-circle mt-3 p-1">
          {" "}
          30m
        </p>
      </div>

      <h3 className="mt-5 mb-3">Activities Details</h3>

      <div className="d-flex justify-content-around border border-0 rounded-3 bg-light px-6 py-3 mb-2">
        <h5>Activity time</h5>
        <h5 className="text-muted">120m</h5>
      </div>

      <div className="d-flex justify-content-around border border-0 rounded-3 bg-light px-6 py-3 mb-5">
        <h5>Break time</h5>
        <h5 className="text-muted">10m</h5>
      </div>

      <a href="#" className="btn btn-primary w-100">
        Activity Completed
      </a>
    </div>
  );
};

export default RightPanel;
