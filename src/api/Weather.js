import React from 'react';
import WeatheCard from './WeatheCard.js';
import FormWeather from './FormWeather.js';
import CurruntCard from './CurruntCard.js';
const API_URL ='http://api.weatherapi.com/v1/forecast.json?';
const API_Key ='ddc5522933d24cf8b41215840200305';
class Weather extends React.Component{
	constructor(props){

		super(props);
		this.state={

			data:[],
			current:[],
			week:[],
			more:[],
			text:"Tizi Ouzou",
		}	}
	updateText = (text) => {
    this.setState({ text });
  };
  componentDidMount(){

	 fetch(`${API_URL}key=${API_Key}&q=${this.state.text}&days=3`)
       .then(res=>res.json())
       .then(info=>this.setState({

       	data:info.location,
        more:info.current.condition,
       	current:info.current,
       	week:info.forecast.forecastday,
       }))
       .catch(err=>console.log('wrong'.err))
	}
	componentDidUpdate(prevProps, prevState){

           if(prevState.text !== this.state.text){

	 fetch(`${API_URL}key=${API_Key}&q=${this.state.text}&days=3`)
       .then(res=>res.json())
       .then(info=>this.setState({
       	data:info.location,
        more:info.current.condition,
       	current:info.current,
       	week:info.forecast.forecastday,
       }))
       .catch(err=>console.log('wrong'.err))
}       
	}

	render(){
		const {more,week,current,data}=this.state;
		console.log(current);
		return (
			<>
	        <FormWeather updateText={this.updateText} />
	        <CurruntCard info={current} pnic={more} map={data}  />
			{week.map((item,idx)=><WeatheCard key={idx} item={item}  />)}
			    <div>{this.state.text}</div>

			</>
				)
		
}}
export default Weather;