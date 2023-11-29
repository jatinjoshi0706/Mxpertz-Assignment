import React from 'react'
import pic02 from '../assets/pic02.jpg'
const Introduction = () => {
    return (<>

        <div className='d-flex justify-content-center  my-5'>
            <div className="card mb-3 " style={{ maxWidth: '700px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pic02} className="img-fluid  " style={{ height: '520px' }} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title my-4" style={{ fontSize: '40px' }}>Welcome To Royal</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam saepe dolor tempore at autem dolorum facilis illum tenetur! Nostrum, ipsum laborum? Non at neque quam, nihil dicta doloribus dolorem fugiat odit accusamus nesciunt dolorum delectus amet? Labore tempora veniam ipsam sunt animi nulla neque reprehenderit delectus at quae illum blanditiis eaque, unde dolorem illo quo! Nulla qui eum iste! Sequi recusandae repudiandae laboriosam voluptatibus neque nisi porro dignissimos aliquam, nesciunt facere. Doloribus sint consectetur corrupti ipsa molestias voluptate, enim ex, illum porro quo nobis sed, esse ratione magni praesentium recusandae ut quaerat consequatur perferendis magnam accusamus quod tempore. Enim, mollitia?</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
        <div class="card-body  mx-auto d-flex flex-column justify-content-center align-items-center p-5 " style={{ width: '100%' , backgroundColor:'#e9ebec' }}>
            <p class="card-text my-2">ONLY THE BEST</p>
            <h5 class="card-title my-3" style={{fontSize:"40px"}}>Fresh Ingredients, Tasty Meals</h5>
            <p class="text-center w-75 " > Lorem ipsum dolor sit amet consectetur adipisicing elit. Est expedita fugit maiores perspiciatis voluptates tenetur reprehenderit repudiandae ut, necessitatibus maxime, tempora libero illo quis minima atque nesciunt nihil minus. Atque.</p>
            <a href="#" class="btn  " style={{backgroundColor:'#b68b3d', color:'white'}}>VIEW ITEMS</a>
        </div>
    </>
    )
}

export default Introduction
