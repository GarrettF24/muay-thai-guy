import Carousel from "react-bootstrap/Carousel"
import React from "react"
import "./LandingPage.css"

export default function LandingPage(props) {
  return (
    <>
      <div className="welcome-container">
        <div className="welcome-info">
          <h4></h4>
        </div>
        <div className="carousel-one">
          <div className="quick-look">
            <h1>Quick Look: Must Haves</h1>
          </div>
          <Carousel>
            <Carousel.Item>
              <div className="icon-container">
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/dyfvqwppd/image/upload/c_scale,w_450/v1633465035/kicking-pads-curved-muay-thai-yokkao-matrix-island-hot-pink-3_a5lk27.jpg"
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <h3>Thai Pads</h3>
                <p>Being a good thai boxer is being a partner.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="icon-container">
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/dyfvqwppd/image/upload/c_scale,w_450/v1633465035/muay-thai-boxing-gloves-yokkao-matrix-blue_fxecsm.jpg"
                  alt="Second slide"
                />
              </div>

              <Carousel.Caption>
                <h3>Boxing Gloves!</h3>
                <p>
                  Keep those hands protected and your training partners safe
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="icon-container">
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/dyfvqwppd/image/upload/c_scale,w_450/v1633465035/shin-guards-muay-thai-yokkao-matrix-red-3_j9l2dk.jpg"
                  alt="Third slide"
                />
              </div>
              <Carousel.Caption>
                <h3>Shin Pads</h3>
                <p>Everyone is tough until they clash shin to shin.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="carousel-two">
          <div className="quick-look">
            <h1>Home Dojo Essentials</h1>
          </div>
        </div>
      </div>
    </>
  )
}
