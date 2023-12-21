import React from 'react';
import './Gallery.css'
import gallery from '../../../assets/images/Primary.png'

const Gallery = () => {
    return (
        <div className='gallery'>
            <div className="gallery-items">
                <div>
                    <h3>Our ercent <span>projects</span></h3>
                    <h6>Webdsite development for Digital Company</h6>
                    <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
                    <img src={gallery} alt="" />
                </div>
            </div>
            <div className="gallery-items">
                <img className='img-1' src={gallery} alt="" />
                <img className='img-2' src={gallery} alt="" />
            </div>
            
        </div>
    );
};

export default Gallery;