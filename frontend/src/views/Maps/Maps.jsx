import React from "react";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const CustomMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 36.2752507, lng: -115.0135269 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true
      }}
    >
      <Marker position={{ lat: 36.2752507, lng: -115.0135269 }} />
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
