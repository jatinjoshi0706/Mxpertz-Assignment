import React from 'react'
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    return (
        <div>
            <div class="card-body  mx-auto d-flex flex-column justify-content-center align-items-center p-5 " style={{ width: '100%', backgroundColor: 'white' }}>
                <p class="card-text my-2">TESTIMONIAL</p>
                <h5 class="card-title my-3" style={{ fontSize: "40px" }}>What People are Saying</h5>
                <div className="container my-3 d-flex flex-row">
                    <div class="card" style={{width: '18rem',border:"white 0px"}}>
                        <div class="card-body">
                        <FaStar style={{color:'#b68b3d'}} /><FaStar style={{color:'#b68b3d'}}/><FaStar style={{color:'#b68b3d'}}/><FaStar style={{color:'#b68b3d'}} /><FaStar style={{color:'#b68b3d'}}/>
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fuga quidem ex perspiciatis. Saepe, voluptates exercitationem sapiente vero alias praesentium accusantium ea atque quidem iste minima dolorum sit expedita consequuntur!</p>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Jatin Joshi</h6>
                        </div>
                    </div>
                    <div class="card" style={{width: '18rem',border:"white 0px"}}>
                        <div class="card-body">
                        <FaStar style={{color:'#b68b3d'}} /><FaStar style={{color:'#b68b3d'}}/><FaStar style={{color:'#b68b3d'}}/><FaStar style={{color:'#b68b3d'}} /><FaStar style={{color:'#b68b3d'}}/>
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fuga quidem ex perspiciatis. Saepe, voluptates exercitationem sapiente vero alias praesentium accusantium ea atque quidem iste minima dolorum sit expedita consequuntur!</p>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Jatin Joshi</h6>
                        </div>
                    </div>
                    <div class="card" style={{width: '18rem',border:"white 0px"}}>
                        <div class="card-body">
                        <FaStar style={{color:'#b68b3d'}} /><FaStar style={{color:'#b68b3d'}}/><FaStar style={{color:'#b68b3d'}}/><FaStar style={{color:'#b68b3d'}} /><FaStar style={{color:'#b68b3d'}}/>
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fuga quidem ex perspiciatis. Saepe, voluptates exercitationem sapiente vero alias praesentium accusantium ea atque quidem iste minima dolorum sit expedita consequuntur!</p>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Jatin Joshi</h6>
                        </div>
                    </div>
                    <div class="card" style={{width: '18rem',border:"white 0px"}}>
                        <div class="card-body">
                        <FaStar style={{color:'#b68b3d'}} /><FaStar style={{color:'#b68b3d'}}/><FaStar style={{color:'#b68b3d'}}/><FaStar style={{color:'#b68b3d'}} /><FaStar style={{color:'#b68b3d'}}/>
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fuga quidem ex perspiciatis. Saepe, voluptates exercitationem sapiente vero alias praesentium accusantium ea atque quidem iste minima dolorum sit expedita consequuntur!</p>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Jatin Joshi</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
