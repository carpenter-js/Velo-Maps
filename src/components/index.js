import React from 'react';

import '../styles/app.css';
import MyBikeMapComponent from './bike-map';
import RouteDecription from './route-desc';
import RouteList from './route-list';
import AddRouteButton from './add-route-button';
import LandingPage from './landing-page';

export default function App(props) {
  return(
  	<main>
			<div className="header">
				<h1>Velo Maps</h1>
			</div>
		

			<div className="flex-container" role="presentation" aria-label="google map with highlited bike routes">
				<MyBikeMapComponent 
					googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDM_ehj1epOAaYbWLgIG2vWT4ErYl-2PJg&v=3.exp&libraries=geometry,drawing,places"
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px`, width: `70%` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>

				<div className="saved-routes-container">
					<div className="route-list">
						<RouteList />
					</div>

					<div className="route-description">
						<RouteDecription />
					</div>
				</div>
			</div>

			{/* <div className="add-route-button">
				<AddRouteButton />
			</div> */}

			<div className="landing-page-container">
			<LandingPage />
			</div>
			
    </main>        
    )
}