import React from "react";

export default function Image({ image }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-4">
      <div className="card" style={{ minHeight: "100%" }}>
        <img src={image.displayImages[0]} alt="@" />
      </div>
    </div>
  );
}
