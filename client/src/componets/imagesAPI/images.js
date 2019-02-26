import React, { Component } from "react";

class Images extends Component {
  //konstruje zmienna do ktorej moge sie odwołać
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    fetch("/test")
      .then(res => res.json())
      .then(images =>
        this.setState({ images: images.displayImages }, () =>
          console.log(images)
        )
      );
  }
  render() {
    //wyciagam ze this.state i przypisuje go do zmiennej images
    const { images } = this.state;
    //=======================================================
    let content = null;
    if (images.length > 0) {
      content = images.map(image => {
        return <img key={image} src={image} alt="unsplash" />;
      });
    }
    return (
      <div>
        <h1> images</h1>
        <li>{content}</li>
      </div>
    );
  }
}

export default Images;
