import React from 'react';
import './Banner.css'
import bannerImage from '../../../assets/images/Primary.png'

const Banner = () => {
    return (
        <div>
            <div className="banner-main">

              <div className="banner-items left-side">
                <div className='text-box'>
                <h1>Grow your brand 
                    through digital</h1>
                    <p>If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness. each of us has within our power the ability to disrupt</p>
                    <button>learn mori</button>
                 
                </div>
                </div>

                <div className="banner-items">
                    <img src={bannerImage} alt="" />

                </div>
              </div>
        </div>
    );
};

export default Banner;