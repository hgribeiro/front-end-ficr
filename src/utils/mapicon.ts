import Leaflet from "leaflet";
import mapMarkerImg from "../images/map-marker.svg";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [20, 68],
  popupAnchor: [179, 2],
});

export default mapIcon;
