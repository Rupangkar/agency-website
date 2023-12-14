import React from 'react';
import './Service.css'
import monitor from '../../../assets/images/monitor.png'
import book from '../../../assets/images/book.png'
import Service from './Service';

const Services = () => {

    const serviceData=[
        {
            id : 1,
            name : "Web Development",
            description : 'My first thought about art, as a child, was that the artist brings something into the world that didnt exist before, and that he is does it without destroying something else',
            img: monitor
        },
        {
            id :2,
            name : 'Digital Marketing',
            description : 'My first thought about art, as a child, was that the artist brings something into the world that didnt exist before, and that he does it without destroying something else.',
            img : monitor

        },
        {
            id : 3,
            name : 'UI/UX Design',
            description : 'My first thought about art, as a child, was that the artist brings something into the world that didnt exist before, and that he does it without destroying something else.',
            img : book
        },
        {
            id : 4,
            name : 'Brand Design',
            description : 'My first thought about art, as a child, was that the artist brings something into the world that didnt exist before, and that he does it without destroying something else.',
            img : book
        }
    
    ]
    return (
        <div className='services-section'>
            <h1>We’re always ready for challenges</h1>

            <div className='service'>
                {
                    serviceData.map(service=> <Service></Service>)
                }
            </div>
         
        </div>
    );
};

export default Services;