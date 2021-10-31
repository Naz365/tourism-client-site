import React from "react";
import trvImg from "./Travelers-bro.png";
const Something = () => {
  return (
    <>
      <div className="container mt-4" style={{ marginBottom: "520px" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <img src={trvImg} className="img-fluid" alt="" srcset="" />
          </div>
          <div className="col-md-6">
            When it comes to booking a holiday, we know everyone likes something
            different - so we've designed our getaways with you in mind. Our{" "}
            <strong>Legend Tour & Travels</strong> resorts are all about luxury,
            while <strong>Legend Tour & Travels</strong> FOR ALL hotels cater
            for everyone, and our <strong>Legend Tour & Travels</strong>
            FOR TWO collection is just for adults. Plus, our destinations range
            from Spain and Italy to far-flung St Lucia and Mexico - not to
            mention city breaks. We go above and beyond your average travel
            agency. As well as an award-winning airline, we've teamed up with
            other tour operators to give you more choice on when and where you
            can fly. As one of the biggest UK holiday companies, we're here
            whenever you need us - via our stores, website or 24/7 Holidayline.
          </div>
        </div>
      </div>
    </>
  );
};

export default Something;
//
