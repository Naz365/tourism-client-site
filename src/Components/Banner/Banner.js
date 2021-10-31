import React from "react";

const Banner = () => {
  return (
    <div
      className="img-fluid d-flex  align-items-center justify-content-center"
      style={{
        height: "80vh",
        backgroundAttachment: " fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://www.plannepal.com/uploads/2016/06/standard/185a5d89cde2bacf5b0ca1879f4ec2a7.jpg")`,
      }}
    >
      <div>
        <h1
          className="text-light text-center text-capitalize my-4 px-2"
          style={{ fontSize: "3rem" }}
        >
          Select the best trip from our website
        </h1>
        <h5
          className="  px-2  text-light  text-center"
          style={{ color: "gray" }}
        >
          You can book the perfect <br /> travel package that will make your
          vaccation a lot more enjoyable
        </h5>
      </div>
    </div>
  );
};

export default Banner;
