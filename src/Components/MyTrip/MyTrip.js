import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyTrip = () => {
  const [myEvents, setMyEvents] = useState([]);
  const { user } = useAuth();
  document.title = "My Trips";
  const email = user.email;
  useEffect(() => {
    axios
      .get(`https://peaceful-castle-01942.herokuapp.com/myTrips/${email}`)
      .then((res) => setMyEvents(res.data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete ?");
    if (proceed) {
      axios
        .delete(`https://peaceful-castle-01942.herokuapp.com/deleteTrip/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const remaining = myEvents.filter((tour) => tour._id !== id);
            setMyEvents(remaining);
          }
        });
    }
  };
  if (!myEvents || myEvents.length === 0) {
    return (
      <div className="container  text-center" style={{ marginBottom: "530px" }}>
        <div>
          <img
            className="img-fluid"
            src="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png"
            alt=""
          />
        </div>
        <h2 className="text-danger">No trips available !</h2>
      </div>
    );
  } else {
    return (
      <div className="container" style={{ marginBottom: "450px" }}>
        <div className="row mt-5">
          {myEvents.map((tour) => {
            return (
              <div className="col-sm-6 my-4 " key={tour._id}>
                <div className=" d-sm-flex   align-items-center shadow-lg h-100 rounded .justify-content-center">
                  <div className="w-50  d-flex justify-content-center align-items-center">
                    <img
                      src={tour.img_url}
                      className="img-fluid w-75 pt-4 pt-sm-0 "
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <h6
                      className={
                        tour.status === "Pending"
                          ? "text-danger"
                          : "text-success"
                      }
                    >
                      {tour.status}
                    </h6>
                    <h4 className="card-title">{tour.name}</h4>
                    <small className="text-primary">{tour.date}</small>
                    <h5 className="py-3">Price : {tour.price} </h5>

                    <button
                      className="btn btn-danger px-4"
                      onClick={() => handleDelete(tour._id)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default MyTrip;
