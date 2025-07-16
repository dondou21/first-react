
export default function Entry(props) {
    return (
            <main className="journal-entry" >
                <div className="main-image-container" >
                    <img className="main-image" src={img.src} alt={img.alt} />
                </div>
                <div className="info-container" >
                    <img className="marker"
                    src="./marker.png" 
                    alt="map marker icon" />
                    <span className="country" >{country}</span>
                    <a href={googleMapsLink} >View on Google Maps</a>
                    <h2 className="entry-title" >{title}</h2>
                    <p className="trip-dates" >{dates}</p>
                    <p className="entry-text" >{text}</p>
                </div>
            </main>
    )
}