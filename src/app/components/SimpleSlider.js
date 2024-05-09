import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import '../aboutus/about.css';
const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Slider {...settings} className='top-container'>
            <div className='container'>
                <span className='text-review text-review-1'>
                I quickly found a match who was very cooperative and helpful, saving me a lot of time shopping.
                </span>
                <Image
                className='imgs'
                src={'/about-1.jpg'}
                width={300}
                height={300}
                />
            </div>
            <div className='container'>
                <span className='text-review'>
                I found my perfect shopping buddy in no time! They were incredibly friendly and helpful,
                 making the whole experience enjoyable and stress-free. 
                 This service is a game-changer for anyone looking for a convenient way to shop
                </span>
                <Image
                className='imgs'
                src={'/about-2.jpg'}
                width={300}
                height={300}
                />
            </div>
            <div className='container'>
                <span className='text-review'>
               <strong className='text-black-100'>"</strong>My shopping buddy was fantastic! They were so accommodating, 
                helping me find exactly what I needed. 
                This service has saved me countless hours of searching and decision-making. Highly recommend!<strong className='text-black-100'>"</strong>
                </span>
                <Image
                className='imgs'
                src={'/about-3.png'}
                width={300}
                height={300}
                />
            </div>
            <div className='container'>
                <span className='text-review'>
                I was pleasantly surprised by how quickly I found my shopping companion. 
                They were attentive and understanding, making the entire process smooth and efficient. 
                This service is a lifesaver for busy individuals!
                </span>
                <Image
                className='imgs'
                src={'/about-4.jpg'}
                width={300}
                height={300}
                />
            </div>
            <div className='container'>
                <span className='text-review'>
                Thanks to this service, I no longer spend hours searching for items. 
                My shopping partner was attentive, offering great suggestions and helping me find exactly what I wanted.
                 I'm thrilled by results!
                </span>
                <Image
                className='imgs'
                src={'/about-5.jpg'}
                width={300}
                height={300}
                />
            </div>
        </Slider>
    );
};

export default SimpleSlider;
