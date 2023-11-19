import React from 'react';
import WeatherCard from './components/WeatherCard';




function App() {
	return (
	<div className='w-[100%] h-[100vh] bg-slate-900 grid place-content-center'>
		<h1 className='font-bold text-center capitalize text-white pb-3'>weather Broadcast</h1>
		<WeatherCard/>
	</div>
	);
}

export default App;
