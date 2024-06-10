"use client";

import React, { useState } from 'react';
import { useGlobalContext } from '@/app/context/globalContext';
import { kelvinToCelsius } from '@/app/utils/misc';

function Temperature() {
    const { forecast } = useGlobalContext();
    const { main, weather, name } = forecast || {};

    if (!forecast || !main || !weather) {
        return(
          <di>Loading...</di>
        )}

    const temp = kelvinToCelsius(main?.temp);
    const minTemp = kelvinToCelsius(main?.temp_min);
    const maxTemp = kelvinToCelsius(main?.temp_max);


    const [localTime, setLocalTime] = useState<string>("");
    const [currentDay, setCurrentDay] = useState<string>("");
    
    

    return (
        <div className="pt-6 pb-5 border rounded-lg flex flex-col justify-between dark:bg-gray-950 shadow-sm dark:shadow-none">
            <div className="temperature">Temperature: {temp}°C</div>
        </div>
    );
}

export default Temperature;
