import React from "react";

export default function Image({ image }) {
  console.log(image);

  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-4">
      <div className="card " style={{ minHeight: "100%" }}>
        <img src={image.displayImages[0]} alt="@" className="card-img-top" />
        <div className="card-body text-center">
          <h4>{image.city}</h4>
          <h6>
            Temperature: <span>{image.temperature} &deg;C</span>
          </h6>
        </div>
      </div>
    </div>
  );
}
