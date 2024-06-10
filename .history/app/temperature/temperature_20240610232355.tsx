"use client";

import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '@/app/context/globalContext';
import { kelvinToCelsius } from '@/app/utils/misc';
import { Skeleton } from '@/components/ui/skeleton';
import { clearSky, cloudDrizzleIcon, cloudy, rainIcon, snow } from '../utils/icons';
import { Thermometer } from 'lucide-react';

function Temperature() {
    const { forecast } = useGlobalContext();
    const { main, weather, name } = forecast || {};

    if (!forecast || !main || !weather) {
        return(
          <div className="flex flex-col space-y-3">
             <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        );
    }

    const temp = kelvinToCelsius(main.temp);
    const minTemp = kelvinToCelsius(main.temp_min);
    const maxTemp = kelvinToCelsius(main.temp_max);

    const [localTime, setLocalTime] = useState<string>("");
    const [currentDay, setCurrentDay] = useState<string>("");

    const { main: weatherMain, description } = weather[0];
    
    const getIcon = () => {
      switch (weatherMain) {
          case "Drizzle":
            return cloudDrizzleIcon;
          case "Rain":
            return rainIcon;
          case "Snow":
            return snow;
          case "Clear":
            return clearSky;
          case "Clouds":
            return cloudy;
          default:
            return clearSky; 
      }
    };

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setLocalTime(now.toLocaleTimeString());
            setCurrentDay(now.toLocaleDateString(undefined, { weekday: 'long' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pt-6 pb-5 border rounded-lg flex flex-col justify-between dark:bg-gray-950 shadow-sm dark:shadow-none">
            <div className="temperature text-7xl text-center flex items-center justify-center"> 
              <Thermometer className="mr-2" size={40} /> {/* Add the Thermometer icon here */}
              {temp}°C
            </div>
            <div>
            <div className="text-end">{localTime}</div>
            </div>
            <div className="weather-info">
              <div>{name}</div>
              <div>{description}</div>
              <div>Min: {minTemp}°C</div>
              <div>Max: {maxTemp}°C</div>
              
              <div>{currentDay}</div>
              <div className="weather-icon">
                {getIcon()}
              </div>
            </div>
        </div>
    );
}

export default Temperature;
