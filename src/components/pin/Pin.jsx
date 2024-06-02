import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import './pin.scss'

function Pin({ item }) {
  return (  
  <Marker position={[item.latitude, item.longitude]}>
    <Popup>
     <div className="popupContainer">
      <img src={item.img} alt="" />
      <div className="textContainer">
        <Link to={`/${item.id}`}>{item.title}</Link>
        <span>{item.bedroom} beedroom </span>
        <b>$ {item.price}</b>
      </div>
     </div>
    </Popup>
  </Marker> 
  );
}

export default Pin;

//  Ghana latitude and longitude [7.9465, -1.0232]