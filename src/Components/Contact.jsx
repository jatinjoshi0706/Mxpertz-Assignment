import React from 'react'
import pic06 from '../assets/pic06.jpg'
const Contact = () => {
    return (
        <div>
            <div className='fluid-container'>
                <img src={pic06} class="card-img " style={{ height: "550px" }} alt="..." />
            </div>
            <div className="container d-flex justify-content-evenly" style={{position:'Absolute',top:'490%'}}>
            <div class="card text-bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                <div class="card-header text-center my-3"><h4>Hours Of Operation</h4></div>
                    
                <div class="card-body">
                    <h5 class="card-title text-center">MON-FRI</h5>
                    <p class="card-text text-center">10:00am - 1:00pm</p>
                    <p class="card-text text-center">4:00pm - 10:30pm</p>
                    <h5 class="card-title text-center">SAT</h5>
                    <p class="card-text text-center">3:00pm - 10:30pm</p>
                    <h5 class="card-title text-center">SUN</h5>
                    <p class="card-text text-center">We are Closed</p>
                    
                </div>
            </div>
            <div class="card text-bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h5 class="card-title">Dark card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            </div>
            
            </div>
            )
}

            export default Contact
