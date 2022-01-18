import React, {useEffect, useState} from 'react';

import './Flights.css'


const Flights = () => {
    let [flightList, setFlightList] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(flights => {
                let flight = flights.filter( flight => flight.launch_year !== '2020');
                setFlightList(flight)
            })
    }, [])

    return (
        <div >
            {
                flightList.map( value => <div key={ value.flight_number} className={'tesla'}>
                    <div>
                        <p>
                        { value.mission_name}
                        </p>
                        <p>
                            {value.launch_year}
                        </p>
                    </div>
                    <img src= {value.links.mission_patch_small} alt={value.mission_name}/>
                </div>)
            }
        </div>
    );
};

export default Flights;