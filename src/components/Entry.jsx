import markerIcon from "../images/marker.png";

export default function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={props.journals.img.src} alt={props.journals.img.alt} />
      </div>
      <div className="info-container">
        <img className="marker" src={markerIcon} alt="map marker icon" />
        <span className="country">{props.journals.country}</span>
        <a href={props.journals.googleMapsLink} target="_blank">
          View on Google Maps
        </a>
        <h2 className="entry-title">{props.journals.title}</h2>
        <p className="trip-dates">{props.journals.dates}</p>
      </div>
    </article>
  );
}
