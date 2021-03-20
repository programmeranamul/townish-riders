import React, { useState } from 'react';
import './Destination.css'
import map from './../../images/Map.png'
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import Data from '../../Data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'



const Destination = () => {

    const { typeOfRides } = useParams();

    const typeOFRide = Data.filter(ride => ride.typeOfRides === typeOfRides)
   
    const [isSearch, setIsSearch] = useState(false)

    const { register, handleSubmit, errors } = useForm();
    const [searchResult, setSearchResult] = useState({})
    const onSubmit = data => {
        const newSearchResult = {
            pickFrom: data.pickFrom,
            pickTo: data.pickTo
        }
        setSearchResult(newSearchResult)
        setIsSearch(true)
    }

    const searchResultCard = []
    for(let i = 0; i< 3 ; i++){
        searchResultCard.push(<div className="searchResultCard d-flex justify-content-around rounded py-3 px-2 mb-2" key={i}>      
        <img className="w-25" src={typeOFRide[0].rideImage} alt={typeOFRide[0].typeOfRides} />
        <h4><FontAwesomeIcon icon={faUserFriends} /> 4</h4>
        <h4>$69</h4>
    </div>) 
    }
  
    return (
        <section className="container pt-4 mt-3 border-top">
            <div className="row">
                <div className="col-md-3">
                    {!isSearch ? <div className="search-box">
                        <form onSubmit={handleSubmit(onSubmit)} className="pickup-form rounded p-3">
                            <label htmlFor="pickFrom" className="mb-0">Pick From</label>
                            <input name="pickFrom" id="pickFrom" ref={register({ required: true })} className="d-block m-0 w-100 rounded border-0 py-1 px-2" />
                            {errors.pickFrom && <p className="error mt-1 mb-2">Input Your Place Name</p>}

                            <label htmlFor="pickTo" className="mb-0">Pick From</label>
                            <input name="pickTo" id="pickTo" ref={register({ required: true })} className="d-block m-0 w-100 rounded border-0 py-1 px-2" />
                            {errors.pickTo && <p className="error mt-1 mb-2">Input where are you want to go</p>}

                            <input type="submit" value="Search" className="d-block w-100 btn btn-danger mt-3" />
                        </form>
                    </div> : <div className="searchResult">
                        <h5 className="bg-danger text-white p-3 rounded">From : {searchResult.pickFrom} <br /> To : {searchResult.pickTo}</h5>
                        {searchResultCard}
                        <button className="btn btn-danger" onClick={()=>setIsSearch(false)}>Clear Result</button>
                    </div>} 
                </div>
                <div className="col-md-8">
                    <img src={map} className="img-fluid" alt="googleMap" />
                </div>
            </div>
        </section>
    );
};

export default Destination;