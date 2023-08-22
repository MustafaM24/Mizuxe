import React from "react";

const section6 = () => {
  return (

<div className="section6">
    <div className="container6">
        <div className="row6">
        <div class="col-lg-96">
            <h3>Get In Touch</h3>
            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas totam aliquid autem numquam libero cupiditate.</p>
            <form action="">

              <div class="input-group input-group-lg mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                </div>
                <input type="text" class="form-control" placeholder="Name"/>
              </div>

              <div class="input-group input-group-lg mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-envelope"></i>
                    </span>
                </div>
                <input type="email" class="form-control" placeholder="Email Address"/>
              </div>
              
              <div class="input-group input-group-lg mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-pencil-alt"></i>
                    </span>
                </div>
                <textarea class="form-control" rows="5" placeholder="Your Message"></textarea>
              </div>

              <input type="submit" value="Submit" class="btn btn-primary btn-lg btn-block"/>
            </form>
          </div>

          




          <div class="col-lg-6 align-self-center6">
            <img src="https://muzammil3.netlify.app/img/mlogo.png" class="img-fluid-6" alt="mizuxe logo"/>
          </div>


        </div>
    </div>
</div>

);
};

export default section6;