import React from "react"
import Slider from "react-slick"

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export default function Crousel() {
  return (
    <div className="mt-5 p-4 rounded" style={{ border: "2px solid white" }}>
      <Slider {...settings}>
        <div>
          <img className="w-50" src="./assets/images/resume1.png" alt="" />
        </div>
        <div>
          <img className="w-50" src="./assets/images/resume2.png" alt="" />
        </div>
        <div>
          <img className="w-50" src="./assets/images/resume3.png" alt="" />
        </div>
        <div>
          <img className="w-50" src="./assets/images/resume4.png" alt="" />
        </div>
      </Slider>
    </div>
  )
}
