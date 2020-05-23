import React from 'react';

function CurruntCard(props){
	console.log(props.info)
		return(
			<>
			<div className="todaylocation container-fluid">
			<h2>{props.map.name} </h2> 
			<p>{props.map.country} </p>
			</div>
			<div className="container-fluid todayinfo">

			   <div className="row">
                   <div className="col-lg-2">
                   <img src={props.pnic.icon} className="imageIcon" alt={props.pnic.text}/>
                   </div>
                    <div className="currenttem col-lg-2">
                   <h1>{props.info.temp_c}°</h1>
                   <p className="icontext">{props.pnic.text} </p>
                   </div>
                    <div className="col-lg-8">
                    <div className="row">
                     <div className="otherinfo ">
                      <div className="hightemp">
                      <h2>{props.info.wind_kph}KMp</h2>
                      <span>Wind</span>
                      </div>
                      <div className="hightemp">
                      <h2>{props.info.cloud}%</h2>
                       <span>Cloud</span>
                      </div>
                      <div className="hightemp">
                      <h2>{props.info.humidity}</h2>
                      <span>humidity</span>
                      </div>
                     </div>
                   </div>
                    
                   </div>
			   </div>

			</div>
			
           	</>

			)
	
}
export default CurruntCard;
/*
{props.info.temp_c > 10 && 
            	<p>
            	cold
            	</p>}
*/