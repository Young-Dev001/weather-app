"use client";

import React, { useState } from 'react';
import { useGlobalContext } from '@/app/context/globalContext';
import { kelvinToCelsius } from '@/app/utils/misc';
import { Skeleton } from '@/components/ui/skeleton';
import { cloudDrizzleIcon } from '@/app/utils/icons';

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
        )}

    const temp = kelvinToCelsius(main?.temp);
    const minTemp = kelvinToCelsius(main?.temp_min);
    const maxTemp = kelvinToCelsius(main?.temp_max);


    const [localTime, setLocalTime] = useState<string>("");
    const [currentDay, setCurrentDay] = useState<string>("");

    const { main: weatherMain, description } = weather[0],
    
    const getIcon = () => {
      switch (weatherMain) {
           case "Drizzle":
           return cloudDrizzleIcon;
      }
    };

    return (
        <div className="pt-6 pb-5 border rounded-lg flex flex-col justify-between dark:bg-gray-950 shadow-sm dark:shadow-none">
            <div className="temperature">Temperature: {temp}°C</div>
        </div>
    );
}

export default Temperature;
