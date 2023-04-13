import React from "react";
import img from "../../assets/gaming.ebaf2ffc84f4451d.jpg";
export default function register() {
  return (
    <>
      <div className="container">
        <div className="row py-3 align-items-end g-0">
       
          <div className="col-md-6 ">
           <div className="bg-image"></div>
          </div>
          <div className="col-md-6 bg-form ">
           <div className="p-4">
           <h3 className="text-center   text-secondary mb-3">Create My Account!</h3>
            <form className="row g-3 ">
            <div className="col-12">
               
                <input
                  type="text"
                  className="form-control bg-dark"
                  id="exampleFormControlInput2"
                  placeholder="Name"
                />
              </div>
              <div className="col-12">
               
                <input
                  type="email"
                  className="form-control bg-dark"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>
              <div className="col-12">
               
                <input
                  type="password"
                  className="form-control bg-dark"
                  id="exampleFormControlInput3"
                  placeholder="password"
                />
              </div>
              <div className="col-12">
               
                <input
                  type="password"
                  className="form-control bg-dark"
                  id="exampleFormControlInput4"
                  placeholder="password"
                />
              </div>
              <div className="col-12">
               
                <input
                  type="text"
                  className="form-control bg-dark"
                  id="exampleFormControlInput5"
                  placeholder="phone"
                />
              </div>
              <div className="col-12">
               
                <button className="btn btn-dark w-100">Create Account</button>
              </div>
              <div><span>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span></div>

              
            </form>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}
