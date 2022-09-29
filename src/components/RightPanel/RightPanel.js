import React, { useEffect, useState } from "react";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RightPanel = (props) => {

    const [breakTime, setBreakTime] = useState([]);

    const handleBreakTimeClick = (time) => {
        console.log("handleBreakTimeClick", time);
        localStorage.setItem("breakTime", time);
        setBreakTime(time);
      };

      useEffect(() => {
        const time = localStorage.getItem("breakTime");
        if (time){
            setBreakTime(time);
        } else {
            setBreakTime("0");
        }
      }, []);

      const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_CENTER
        });
    };

  return (
    <div className="">
      <div className="d-flex mt-5 mb-5">
        <img src="favicon.ico" />
        <h3 className="p-2">Puja dey</h3>
      </div>

      <div className="d-flex justify-content-around border border-0 rounded-3 bg-light mt-4 flex-wrap">
        <div className="mt-2">
          <h6>59kg</h6>
          <p>Weight</p>
        </div>

        <div className="mt-2">
          <h6>5.2</h6>
          <p>Height</p>
        </div>

        <div className="mt-2">
          <h6>29yrs</h6>
          <p>Age</p>
        </div>
      </div>
      <h3 className="mt-5 mb-5">Add A Break</h3>

      <div className="d-flex justify-content-around border border-0 rounded-3 bg-light p-2 flex-wrap">
        <p className="bg-white text-dark border rounded-circle mt-3 p-1" onClick={()=> handleBreakTimeClick("10")}>
          {" "}
          10m
        </p>
        <p className="bg-white text-dark border rounded-circle mt-3 p-1" onClick={()=> handleBreakTimeClick("15")}>
          {" "}
          15m
        </p>
        <p className="bg-white text-dark border rounded-circle mt-3 p-1" onClick={()=> handleBreakTimeClick("20")}>
          {" "}
          20m
        </p>
        <p className="bg-white text-dark border rounded-circle mt-3 p-1" onClick={()=> handleBreakTimeClick("25")}>
          {" "}
          25m
        </p>
        <p className="bg-white text-dark border rounded-circle mt-3 p-1" onClick={()=> handleBreakTimeClick("30")}>
          {" "}
          30m
        </p>
      </div>

      <h3 className="mt-5 mb-3">Activities Details</h3>

      <div className="d-flex justify-content-around border border-0 rounded-3 bg-light px-6 py-3 mb-2">
        <h5>Activity time</h5>
        <h5 className="text-muted">{props.activityTime}m</h5>
      </div>

      <div className="d-flex justify-content-around border border-0 rounded-3 bg-light px-6 py-3 mb-5">
        <h5>Break time</h5>
        <h5 className="text-muted">{breakTime}m</h5>
      </div>

      <a href="#" className="btn btn-primary w-100" onClick={showToastMessage}>
        Activity Completed
      </a>
      <ToastContainer />
    </div>
  );
};

export default RightPanel;
