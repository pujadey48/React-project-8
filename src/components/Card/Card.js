import React from 'react';

const Card = (props) => {
    const {activity, handleAddToActivity} = props;

    console.log(props);

    const {id, name, age, time, img, description} = activity;

    return (
        // <div className="card" style="width: 18rem;">
        //     <img src="..." className="card-img-top" alt="..."/>
        //     <div className="card-body">
        //         <h5 className="card-title">Card title</h5>
        //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //         <a href="#" className="btn btn-primary">Go somewhere</a>
        //     </div>
        // </div>

        <div className="card">
            <img src={img} className="img-fluid w-100 h-50 p-2" alt="..."/>
            <div className="card-body">
                <h5 className="card-title ">{name}</h5>
                <p className="card-text ">{description}</p>
                <p className="card-text ">Age: {age}</p>
                <p className="card-text ">Time: {time}</p>
                <a href="#" className="btn btn-primary" onClick={()=> handleAddToActivity(activity)}>Add to activities</a>
            </div>
        </div>
    );
};

export default Card;