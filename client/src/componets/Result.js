import React from "react";
import Image from "./Globals/Image";

export default function Result({ data }) {
  return (
    <div className="container">
      <div className="row">
        {data.map(image => {
          return <Image key={image._id} image={image} />;
        })}
        x
      </div>
    </div>
  );
}
