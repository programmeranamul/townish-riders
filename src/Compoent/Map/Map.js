import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const location = {
    lat: 26.670321,
    lng: 93.146057
};

function Map() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyAOHyRtCy_GCgjnBzIQKBD08FizgHzI-KE"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)