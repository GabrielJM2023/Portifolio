import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css"; // Seu arquivo CSS para customização

const data = [
    {
        name: 'Em Breve',
        img: '/images/Embreve.jpeg',
    },
    {
        name: 'Em Breve',
        img: '/images/Embreve.jpeg',
    },
    {
        name: 'Em Breve',
        img: '/images/Embreve.jpeg',
    },
];

function Carrosel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        responsive: [
          {
            breakpoint: 1920,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              centerMode: true, // Desativa o modo centralizado
              centerPadding: '100px', // Remove o padding
              dots: true
            },
          },
          {
            breakpoint: 845,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              centerMode: false, // Desativa o modo centralizado
              centerPadding: '0', // Remove o padding
              dots: true
            },
          }
        ]
      };

    return (
        <div className="AreaCarrossel">
            <Slider {...settings}>
                {data.map((d) => (
                    <div className="Area">
                        <img src={d.img} alt={d.name} className="carousel-image" />
                        <h1>{d.name}</h1>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carrosel;
