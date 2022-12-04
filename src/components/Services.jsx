import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
const Services = () => {
  return (
    <div className='services'>
      <Carousel
        infiniteLoop
        autoPlay
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}>
        <div>
          <img height="500vh" src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvY2tjaGFpbnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="pic" />
          <h3 className='legend'>Block Chain </h3>
        </div>
        <div>
          <img height="500vh" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm373batch16-banner-09.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=76495cf42f3193e5383701c12523bb89" alt="" />
          <h3 className='legend'>The World of Smart Contracts</h3>
        </div>
        
      </Carousel>
    </div>
  )
}

export default Services
