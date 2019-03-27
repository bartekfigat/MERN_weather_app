import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZW9hbiIsImEiOiJjanRpdXc3anQydGZuNDRsNjRva2ppc2xoIn0.2CqiJUJUSTh4RCNd66vV0A"
});
const coordinate = [-0.481747846041145, 51.3233379650232];
const mapStyle = "mapbox://styles/mapbox/streets-v9";
const styleCont = { height: "100vh", width: "100vh" };
const layCont = { "icon-image": "marker-15" };

export class MapSection extends Component {
  render() {
    return (
      <div>
        <Map
          style={mapStyle}
          containerStyle={{
            height: "40vh",
            width: "40vw"
          }}
          center={[19.855571, 50.1486687]}
          zoom={[15]}
        >
          <Layer type="symbol" id="marker" layout={layCont}>
            <Feature coordinates={[19.855571, 50.1486887]} />
          </Layer>
        </Map>
      </div>
    );
  }
}
export default MapSection;
