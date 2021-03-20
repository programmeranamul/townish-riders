import React from 'react';
import './Cars.css'
import { Container } from 'react-bootstrap';
import Data from './../../Data/Data';
import Car from '../Car/Car';

const Cars = () => {
    return (
        <main>
            <Container>
            <section className="row py-5 py-md-0">
                {Data.map(car => <Car key={car.id} car={car} />)}
            </section>
            </Container>         
        </main>
    );
};

export default Cars;