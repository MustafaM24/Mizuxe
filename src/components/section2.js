import React from "react";

const section2 = () => {
  return (
    <div className="section2">
      <div className="div-container2">
        <h1 className="heading-subscribe2">Subscribe to our newsletter</h1>
        <div className="div-row2">
          <div className="div-col-md2">
                <input type="text" class="form-control form-control-lg mb-resp" placeholder="Enter Name"/>
          </div>
          <div className="div-col-md2">
              <input type="email" class="form-control form-control-lg mb-resp" placeholder="Enter Email"/>
          </div>
          <div className="div-col-md2">
              <button class="btn btn-primary btn-lg btn-block">
              <i class="fas fa-envelope-open"> Subscribe</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section2;