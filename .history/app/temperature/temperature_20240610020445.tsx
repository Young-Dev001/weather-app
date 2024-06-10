import React from 'react';
import { useGlobalContext } from '../context/globalContext';
import { kelvinToCelsius } from '../utils/misc';

function Temperature() {
    const forecast = useGlobalContext();
    const { main, weather, name } = forecast || {};

    if (!forecast || !main || !weather) {
        return <div>Loading...</div>;
    }

    const temperature = main.temp ? kelvinToCelsius(main.temp) : 'N/A';

    return (
        <div className="pt-6 pb-5 border rounded-lg flex flex-col justify-between dark:bg-gray-950 shadow-sm dark:shadow-none">
            <div className="temperature">Temperature: {temperature}°C</div>
            <div className="location">Location: {name}</div>
            <div className="description">Description: {weather[0].description}</div>
        </div>
    );
}

export default Temperature;
