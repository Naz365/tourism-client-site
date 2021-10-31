import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  const [allTours, setAllTours] = useState([]);
  document.title = "Fahim's tourism guide";
  useEffect(() => {
    axios
      .get("https://peaceful-castle-01942.herokuapp.com/allTours")

      .then((res) => setAllTours(res.data));
  }, []);

  if (allTours.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center spinner">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "9rem", height: "9rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ marginBottom: "370px" }}>
        <Banner />
        <div className="container my-5">
          <h2 className="my-3 text-center">
            Our <span className="text-warning fw-bold"> Travel package</span>
          </h2>
          <div className="row row-cols-1 row-cols-md-3 g-4 ">
            {allTours.map((tour) => {
              return (
                <div className="col " key={tour._id}>
                  <div className="card h-100">
                    <img
                      src={tour.img_url}
                      className="card-img-top h-50"
                      alt="..."
                    />
                    <div className="card-body">
                      <h4 className="card-title">{tour.name}</h4>
                      <h5 className="card-title my-4">Rs. {tour.price}</h5>
                      <p className="card-text">{tour.desc.substr(0, 220)}</p>
                      <Link to={`/tourBook/${tour._id}`}>
                        <button className="w-100 btn btn-dark">Book now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <About />
        <Subscribe />
      </div>
    );
  }
};

export default Home;
