import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <h3 className="text-center">
        WHY <span className="text-warning fw-bold"> CHOOSE </span>US
      </h3>
      <p className="text-center">
        We are always stay with our clients, Give our best security and support
        to them.
      </p>
      <div
        className="row shadow-lg py-3 align-items-center"
        style={{ borderRadius: "20px" }}
      >
        <div className="col-md-4 text-center">
          <img
            className="img-fluid w-25"
            style={{ borderRadius: "50%" }}
            src="https://i.ibb.co/F79M50f/tour.png"
            alt=""
          />
          <h5 className="my-3">
            <span className=" text-warning fw-bold"> 100+</span> Premium tours
          </h5>
          <p>
            We are especially proud of our selection of tours around Pakistan
            because it has no analogues in the market. Whether you want to make
            a multi-day trip to the Western Pakistan or just enjoy a fascinating
            3-hour walking tour in Kiev, with us you will always find what you
            are looking for.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img
            className="img-fluid w-25"
            src="https://i.ibb.co/SNBQZ3q/undraw-Team-re-0bfe.png"
            alt=""
          />
          <h5 className="my-3">
            <span className="text-warning fw-bold "> 100+ </span>Custormers
          </h5>
          <p>
            We understand that there is no unique way to make a perfect journey
            that everyone will like because each person has his special needs
            and desires. We always listen to you first and then suggest the
            travel solution that is the best for you.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img
            className="img-fluid w-25"
            src="https://i.ibb.co/R0JqrF8/customer.png"
            alt=""
          />
          <h5 className="my-3">
            <span className="text-warning fw-bold "> 24Hr</span> Support
          </h5>
          <p>
            Wherever you need us, we are always there for you. You can easily
            contact us on e-mail or by phone, subscribe to our newsletter or
            follow us on Facebook and other social media platforms. We are happy
            to have you as a part of our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
