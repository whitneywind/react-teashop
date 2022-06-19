const DirectionsEng = () => {
    return (
        <>
            <div className="row row-content">
                <div className="mt-2 col col-xs-12 col-lg-10 offset-lg-1">
                    <div id="map-div">
                    <iframe id="google-map-1" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12657.193075834184!2d127.04119868406984!3d37.52446568032793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4e10d11250265f0e!2sTea%20Collective!5e0!3m2!1sen!2sus!4v1653507628806!5m2!1sen!2sus" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="row row-content mt-5">
                <div className="col col-lg-10 offset-lg-1">
                    <h3 className="text-center">Nearest Subway Station:  <b>Cheongdam Station</b></h3>
                    <h4 className="text-center">Estimated Time: <b>10 minutes</b></h4>
                </div>
            </div>
            <div className="row row-content mb-4">
                <div className="mt-3 col col-lg-10 offset-lg-1">
                    <div id="subway-directions">
                       <h4>Directions from Cheongdam Station:</h4>
                       <ol>
                           <li>Exit the station via exit 10.</li>
                           <li>Walk straight for 40 feet and turn right at the intersection.</li>
                           <li>Continue walking straight ahead for 200 feet.</li>
                           <li>The building is on your right, right after the "Starship Entertainment" building.</li>
                           <li>Our teashop is the first door on the left once you walk inside the building. </li>
                       </ol>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row row-content">
                <div className="mt-4 col col-lg-10 offset-lg-1">
                    <h3 className="text-center">Nearest Bus Stop:  <b>Cheongdam Public Safety Center</b></h3>
                    <h4 className="text-center">Estimated Time: <b>4 minutes</b></h4>
                </div>
            </div>
            <div className="row row-content">
                <div className="mt-3 col col-lg-10 offset-lg-1">
                    <div id="bus-directions">
                       <h4>Directions from Cheongdam Station:</h4>
                       <ol>
                           <li>Turn right once you get off the bus.</li>
                           <li>Walk straight for 25 feet.</li>
                           <li>The building is on your left, right after the "Hotel Entra."</li>
                           <li>Our teashop is the first door on the left once you walk inside the building. </li>
                       </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DirectionsEng;