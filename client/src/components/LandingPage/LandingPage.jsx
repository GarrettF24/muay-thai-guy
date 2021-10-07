import Carousel from "react-bootstrap/Carousel"
import React from "react"
import "./LandingPage.css"

export default function LandingPage(props) {
  return (
    <>
      <div className="welcome-container">
        <div className="welcome-info">
          <h4>
            Muay Thai is the most practical and deadliest of the striking
            Martial Arts . It has existed for over 2000 years. For the Thai's it
            is a way of life. Most if not all Nak Muay's begin fighting
            competitively at a very young age and continue into adulthood. I am
            certainly not the biggest authority when it comes to Muay Thai, but
            I invite you to come take a look at what I have to say based off my
            5 years experience.
          </h4>
        </div>
        <div className="quick-look">
          <h1>Quick Look: Must Haves</h1>
        </div>
        <div className="carousel-one">
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
                <p>Being a good thai boxer is being a good partner.</p>
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
        {/* <div className="quick-look">
          <h1>Home Dojo Essentials</h1>
        </div>
        <div className="carousel-two">
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
                <p>Being a good thai boxer is being a good partner.</p>
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
        </div> */}
      </div>
    </>
  )
}
