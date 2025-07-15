
export default function Entry() {
    return (
            <main className="journal-entry" >
                <div className="main-image-container" >
                    <img className="main-image" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="mount fuji" />
                </div>
                <div className="info-container" >
                    <img className="marker"
                    src="./marker.png" 
                    alt="map marker icon" />
                    <span className="country" >Japan</span>
                    <h2 className="entry-title" >Mount Fuji</h2>
                    <p className="trip-dates" >12 Jan, 2021 -24 Jan, 2021</p>
                    <p className="entry-text" >Mount Fuji is the tallest mountain in Japan, standing 
                        at 3,776 mters (12,389 feet). Mount Fuji is the single most popular 
                        tourist site in Japan, for both Japanese and foreign tourists
                    </p>
                </div>
            </main>
    )
}