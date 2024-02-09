import React from 'react'
import img from './img/card-img.png'
import lastimg from './img/card-end-img.png'


export default function Services(props) {
    return (
        <div className='carousel-container'>

            <div id="carouselExampleDark" className={`carousel  carousel-${props.mode === 'light' ? "dark" : "light"} slide`}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={img} className="d-block" alt="..." style={props.mode === 'light' ? { filter: "none" } : { filter: "invert()" }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Effortless Editing at Your Fingertips</h5>
                            <p>Discover how our services can revolutionize the way you work with text.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={img} className="d-block" alt="..." style={props.mode === 'light' ? { filter: "none" } : { filter: "invert()" }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Transforming Text, Empowering You</h5>
                            <p>Explore our suite of services designed to streamline your text editing experience</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img} className="d-block" alt="..." style={props.mode === 'light' ? { filter: "none" } : { filter: "invert()" }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>From Space Trimming to Email Extraction</h5>
                            <p>Unlock the full potential of your text with our comprehensive range of tools</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={lastimg} className="d-block" alt="..." style={props.mode === 'light' ? { filter: "none" } : { filter: "invert()" }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>From Space Trimming to Email Extraction</h5>
                            <p>Unlock the full potential of your text with our comprehensive range of tools</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
