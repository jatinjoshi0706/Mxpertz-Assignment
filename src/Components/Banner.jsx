import React from 'react'
import pic01 from "../assets/pic01.jpg";
const Banner = () => {
  return (
    <div>
      <div class="card  " >
        <img src={pic01} class="card-img " style={{ height: "550px" }} alt="..." />
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "550px", backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
        <div class="card-img-overlay d-flex   align-items-center flex-column justify-content-center mb-5 gap-3">
          <h5 class="card-title fs-1" style={{ color: "White" }}>Only Quality Food</h5>
          <div className="text-center w-75">
            <p class="card-text justify-conten-center " style={{ color: "#ddd6d6" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus blanditiis in deleniti voluptatem nam nisi suscipit minus laudantium modi quasi recusandae, nostrum illum sequi eos adipisci. Inventore necessitatibus facere quis vitae atque saepe porro minima, pariatur dignissimos? Iusto, reiciendis perspiciatis? Aliquam maiores quaerat numquam atque, quam incidunt. Ut, a error.</p>
          </div>
          <div className="">
            <button type="button" class="btn btn-primary mx-4">View Menu</button>
            <button type="button" class="btn btn-outline-light mx-4 ">Reservation</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

