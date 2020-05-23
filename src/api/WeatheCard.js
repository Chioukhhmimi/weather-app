import React from 'react';

function WeatheCard(props){
		return(<>
			<div className="WeatherContainer card"> 
			         <img src={props.item.day.condition.icon} className="card-img-top icon" alt={props.item.day.condition.text} />
			         <div className="WeatheCard card-body">
			              <h5 className="card-title">{props.item.day.maxtemp_c}°</h5>
                          <p>date:{props.item.date} </p>
			         </div> 
			         
			</div>
			</>
			)
	
}
export default WeatheCard;
