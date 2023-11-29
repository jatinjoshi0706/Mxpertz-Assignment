import React from 'react'
import pic02 from '../assets/pic02.jpg'
const Items = () => {
    return (
        <>
            <div className="background" style={{ backgroundColor: 'Black', height:'100%'  }}>

                <div className="container d-flex   justify-content-center h-50">
                    <div class="card text-center mb-3" style={{width: '18rem'}}>
                        <div class="card-body " style={{height:'100px'}}>
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <img src={pic02} className="img-fluid  " style={{ height: '520px' }} alt="..." />
                    <div class="card text-center mb-3" style={{width: '18rem'}}>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                




            </div>
        </>
    )
}

export default Items
