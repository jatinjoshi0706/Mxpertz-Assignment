import React from 'react'
import pic03 from '../assets/pic003.jpg'
import pic04 from '../assets/pic004.jpg'
import pic05 from '../assets/pic05.jpg'
const Blog = () => {
    return (
        <div>
            <div class="card-body  mx-auto d-flex flex-column justify-content-center align-items-center p-5 " style={{ width: '100%', backgroundColor: '#e9ebec' }}>
                <p class="card-text my-2">DON'T MISS</p>
                <h5 class="card-title my-3" style={{ fontSize: "40px" }}>Our News And Events</h5>
                <p class="text-center w-75 " > Lorem ipsum dolor sit amet consectetur adipisicing elit. Est expedita fugit maiores perspiciatis voluptates tenetur reprehenderit repudiandae ut, necessitatibus maxime, tempora libero illo quis minim.</p>
                <div className="container d-flex justify-content-evenly flex-row my-4">
                    <div class="card" style={{width: "18rem"}}>
                        <img src={pic03} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                    <div class="card" style={{width: "18rem"}}>
                        <img src={pic03} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                    <div class="card" style={{width: "18rem"}}>
                        <img src={pic03} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                </div>
                <a href="#" class="btn  " style={{ backgroundColor: '#b68b3d', color: 'white' }}>READ MORE</a>
            </div>
        </div>
    )
}

export default Blog
