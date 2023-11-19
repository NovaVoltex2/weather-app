import React, { useState,useEffect } from 'react'
import image1 from '../images/cloudy.png'
import image2 from '../images/rain.png'
import image3 from '../images/raining.png'
import image4 from '../images/rainy-day.png'
import image5 from '../images/sun.png'
import image6 from '../images/storm.png'
import image7 from '../images/temperature.png'
import image8 from '../images/hot.png'
import image9 from '../images/cloudy_2.png'
import image14 from '../images/cloudy2.png'
import image10 from '../images/cloudy_1.png'
import image11 from '../images/clouds.png'
import image12 from '../images/snow.png'
import image13 from '../images/sunny.png'


let images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13,image14]



export default function WeatherCard() {
const[show,isShow]=useState(true)
const[long,setLong]=useState(10.99)
const [lat, setLat] = useState(44.34)
const [place, setplace] = useState()
const [showCoordinate,setShowCoordinate]=useState(true)


const toggleCordinate=()=>{
	setShowCoordinate(!showCoordinate)
	}


const [weatherData, setWeatherData] = useState([])
const [Weatherimages, setWeatherimages] = useState(images[1])

function getData(e) {
		console.log('submitted data');
		e.preventDefault();
		const formData = new FormData(e.target);
		const lat = formData.get('lat');
		const long = formData.get('long');
	    const place = formData.get('place');
		console.log(lat);
		console.log(long);
		setLat(lat)
		setLong(long)
	    setplace(place.trim())
	}
	useEffect(() => {
		const fetchData = async () => {
			if (showCoordinate) {
				const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=25a40b7a9463f65a10c6b5230b59042b`;
				try {

					const response = await fetch(apiUrl);
					const data = await response.json();
					setWeatherData([
						data['main'].pressure, data['main'].humidity,
						data['main'].temp, data['main'].temp_max,
						data['wind'].speed, data['weather'][0].main,
						data['weather'][0].description,
						data['sys'].country, data.name])

					switch (data['weather'][0].description) {
						case "broken clouds":
							setWeatherimages(images[8])
							break;
						case "moderate rain":
							setWeatherimages(images[9])
							break;
						case "light rain":
							setWeatherimages(images[3])
							break;
						case "thunderstorm":
							setWeatherimages(images[5])
							break;
						case "overcast cloud":
							setWeatherimages(images[8])
							break;
						case "scattered clouds":
							setWeatherimages(images[10])
							break;
						case "clear sky":
							setWeatherimages(images[12])
							break;
						case "light snow":
							setWeatherimages(images[11])
							break;
						default:
							break;
					}

				} catch (error) {
					console.error('Error:', error);
				}
			} else {
				const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=25a40b7a9463f65a10c6b5230b59042b`;
				try {

					const response = await fetch(apiUrl);
					const data = await response.json();
					setWeatherData([
						data['main'].pressure, data['main'].humidity,
						 data['main'].temp, data['main'].temp_max,
						  data['wind'].speed, data['weather'][0].main,
						   data['weather'][0].description,
						    data['sys'].country, data.name])
					
			







					switch (data['weather'][0].description) {
						case "broken clouds":
							setWeatherimages(images[8])
							break;
						case "moderate rain":
							setWeatherimages(images[9])
							break;
						case "light rain":
							setWeatherimages(images[3])
							break;
						case "sunny":
							setWeatherimages(images[4])
							break;
						case "thunderstorm":
							setWeatherimages(images[5])
							break;
						case "overcast cloud":
							setWeatherimages(images[8])
							break;
						case "scattered clouds":
							setWeatherimages(images[10])
							break;
						case "clear sky":
							setWeatherimages(images[12])
							break;
						case "light snow":
							setWeatherimages(images[11])
							break;
						default:
							break;
					}

				} catch (error) {
					console.error('Error:', error);
				}
			}
			
			
		};

		fetchData();
	}, [lat, long,place,showCoordinate]);
	
const showOption=()=>{
	isShow(!show)
}

  return (
	  <div className='w-[22rem]  transition-all duration-1000 bg-[#0c0f2b] rounded-md flex flex-col items-center p-2 justify-evenly capitalize shadow-md shadow-[#0000004b]' >
		  <div className='w-[100%] h-[100%]  rounded-md flex gap-5 flex-col items-center p-2 justify-evenly relative'>
			<div className='absolute top-0 left-1 text-xs flex flex-row-reverse gap-2 font-semibold text-white'>
				  <p>{weatherData[8]}</p>
				  <p>{weatherData[7]} :</p>
			</div>
			  <div className='w-40 h-40 bg-[#00000060] rounded-full grid place-content-center text-white'>
				  <div>
					<img
						  src={Weatherimages}
						  alt='icons'
						  width={80}
						  className='animate-[wiggle_1s_ease-in-out_infinite] transition-all duration-1000'
					/>
				  </div>
				  <p className='text-center relative'><em className='text-3xl font-semibold not-italic'>{weatherData[2]}</em> <sup className='text-[10px] absolute top-3'>0</sup></p>
			  </div>
			  <div className='w-full p-2 flex flex-col gap-2'>
				  <div className='w-full bg-[#06081898] text-[#fff] flex justify-between p-2 rounded-md'>
					  <p className='text-[#ffffff58]'>pressure</p>
					  <p>{weatherData[0]} hPa</p>
				  </div>
				  <div className='w-full bg-[#06081898] text-[#fff] flex justify-between p-2 rounded-md'>
					  <p className='text-[#ffffff58]'>wind speed</p>
					  <p className='lowercase'>{weatherData[4]} m/s</p>
				  </div>
				  <div className='w-full bg-[#06081898] text-[#fff] flex justify-between p-2 rounded-md'>
					  <p className='text-[#ffffff58]'>description</p>
					  <p>{weatherData[6]}</p>
				  </div>
				  <div className='w-full bg-[#06081898] text-[#fff] flex justify-between p-2 rounded-md'>
					  <p className='text-[#ffffff58]'>weather type</p>
					  <p>{weatherData[5]}</p>
				  </div>
				  <div className='w-full bg-[#06081898] text-[#fff] flex justify-between p-2 rounded-md'>
					  <p className='text-[#ffffff58]'>humidity</p>
					  <p>{weatherData[1]}%</p>
				  </div>
				  <div className='w-full bg-[#06081898] text-[#fff] flex justify-between p-2 rounded-md relative'>
					  <p className='text-[#ffffff58]'>max temperatur</p>
					  <p>{weatherData[3]} <sup className='text-[5px] absolute top-4'>o</sup></p>
				  </div>
			  </div>
			  <div className='w-full flex justify-between rounded-md'>
				  <button className='bg-blue-800 p-3 w-full rounded-md text-sm capitalize font-medium px-2 text-white' onClick={showOption}>change Location</button>
			  </div>
		</div>
		  <div className={`${`absolute w-full h-full top-0 backdrop-blur-lg  transition-transform duration-1000`} ${show ? `translate-x-[-100rem]` : `translate-x-[0rem]`}`}>
			  <h1 className='absolute translate-x-[-50%] translate-y-[-15%] top-[15%] left-[50%] text-xl font-bold text-white'>set your coordinates</h1>
			  <form onSubmit={getData}>
				  <div className={`${show ? 'hidden' : ''} absolute bg-[#0c0f2b92] flex flex-col p-10 translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] gap-2 rounded-md shadow-sm shadow-black transition-transform duration-1000`}>
					  <div className="flex flex-col gap-1">
						  <label className="text-white text-xs pt-2">search country or town</label>
						  <input className="rounded-md bg-[#ffffff41] p-1 outline-none text-white lowercase disabled:bg-[#06081898] disabled:text-[#001eff98]" placeholder="country or town" type="search" name="place" disabled={showCoordinate} />
					  </div>
					  <div>
						  <input type='checkbox' onChange={toggleCordinate}/>
						  <label className="text-white text-xs pt-2">Don't use coordinates</label>
					  </div>

					  {/* coordinates section */}
					  <div className={`${showCoordinate?`block`:`hidden`}`}>
					  <div className="flex flex-col gap-1">
						  <label className="text-white text-xs pt-2">Latitude</label>
						  <input className="rounded-md bg-[#ffffff41] p-1 outline-none text-white" placeholder="44.34" type="number" name="lat" />
					  </div>
					  <div className="flex flex-col gap-1">
						  <label className="text-white text-xs pt-2">Longitude</label>
						  <input className="rounded-md bg-[#ffffff41] p-1 outline-none text-white" placeholder="10.99" type="number" name="long" />
						  </div>
						  </div>
					  <button className="bg-blue-950 p-1 rounded-md text-sm capitalize font-medium px-2 text-white" type="submit" onClick={showOption}>
						  Find Out
					  </button>
				  </div>
			  </form>
			  
		  </div>
		  <a href="https://www.flaticon.com/free-icons/weather" title="weather icons" className='text-xs text-[#53598998]'>Weather icons created by iconixar - Flaticon</a>
	</div>
  )
}
