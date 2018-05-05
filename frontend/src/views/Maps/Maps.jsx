// react components used to create a google map
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";

import React from "react";

const CustomMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 28.539195, lng: -81.404758 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true
      }}
    >
      <Marker position={{ lat: 28.539195, lng: -81.404758 }} />
    </GoogleMap>
  ))
);

function Maps({ ...prop }) {
  return (
    <CustomMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmzhT3PBEWvNMYdkVmgJGuAAf0-Gg_Mgc"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default Maps;
