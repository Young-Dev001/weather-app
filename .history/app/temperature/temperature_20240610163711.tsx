"use client";

import React from 'react';
import { useGlobalContext } from '@/app/context/globalContext';
import { kelvinToCelsius } from '@/app/utils/misc';

function Temperature() {
    const { forecast } = useGlobalContext();
    const { main, weather, name } = forecast || {};

    if (!forecast || !main || !weather) {
        return <div>Loading...</div>;
    }

    const temp = kelvinToCelsius(main?.temp);
    const minTemp = kelvinToCelsius(main?.temp_min);
    const maxTemp = kelvinToCelsius(main?.temp_max);
    
    

    return (
        <div className="pt-6 pb-5 border rounded-lg flex flex-col justify-between dark:bg-gray-950 shadow-sm dark:shadow-none">
            <div className="temperature">Temperature: {temp}°C</div>
            <div className="min-temperature">Min Temperature: {minTemp}°C</div>
            <div className="max-temperature">Max Temperature: {maxTemp}°C</div>
            <div className="location">Location: {name}</div>
            <div className="description">Description: {weather[0].description}</div>
        </div>
    );
}

export default Temperature;
