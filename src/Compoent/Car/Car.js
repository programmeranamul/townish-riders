import React from 'react';
import { useHistory } from 'react-router';
import './Car.css'

const Car = (props) => {
    const history = useHistory();
    const { typeOfRides, rideImage } = props.car
    return (
        <article className="col-md-3 text-center single-ride" onClick={() => history.push(`/destination/${typeOfRides}`)}>
            <img src={rideImage} alt={typeOfRides} className="w-50" />
            <h4 className="mt-3">{typeOfRides}</h4>
        </article>
    );
};
export default Car;