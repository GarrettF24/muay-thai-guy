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
            competitively at a very young age and continue into adulthood. Come
            take a look at what I have to say about top brands and what to look
            for in a gyn based off my 5 years experience.
          </h4>
        </div>
        <div className="quick-look">
          <h1>Quick Look: Must Haves</h1>
        </div>
        <div className="carousel carousel-one">
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
                <h3 className="item-title">Thai Pads</h3>
                <p className="item-info">
                  Being a good thai boxer is being a good partner.
                </p>
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
                <h3 className="item-title">Boxing Gloves!</h3>
                <p className="item-info">
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
                <h3 className="item-title">Shin Pads</h3>
                <p className="item-info">
                  Everyone is tough until they clash shin to shin.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="quick-look">
          <h1>Home Dojo Essentials</h1>
        </div>

        <div className="carousel carousel-two">
          <Carousel>
            <Carousel.Item>
              <div className="icon-container">
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/dyfvqwppd/image/upload/c_scale,w_450/v1633465030/everlast_heavy_bag_mpiu0o.jpg"
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <h3 className="item-title">Heavy Bag</h3>
                <p className="item-info">
                  If you are going to get one bag for a home gym, this is the
                  one
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="icon-container">
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/dyfvqwppd/image/upload/c_scale,w_450/v1633465034/fairtex_teardrop_e65ozw.jpg"
                  alt="Second slide"
                />
              </div>

              <Carousel.Caption>
                <h3 className="item-title">Tear Drop Bag</h3>
                <p className="item-info">
                  These bags are excellent for working striking from the clinch.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="icon-container">
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/dyfvqwppd/image/upload/c_scale,w_450/v1633465032/everlast_wall_mount_dpueb1.jpg"
                  alt="Third slide"
                />
              </div>
              <Carousel.Caption>
                <h3 className="item-title">Wall Mount</h3>
                <p className="item-info">
                  It's got the angles for uppercuts and hooks. Switch the angle
                  and throw.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  )
}
