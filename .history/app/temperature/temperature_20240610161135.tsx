import React from 'react'
import { useGlobalContext } from '@/app/context/globalContext'
import { kelvinToCelsius } from '@/app/utils/misc';



function Temperature() {
    const { forecast } = useGlobalContext();

    const { main, timezone, weather, name } = forecast;


    if (!forecast || !weather) {
        return <div>Loading...</div>
    }
    const temp = kelvinToCelsius(main?.temp);
    const minTemp = kelvinToCelsius(main?.temp_min);
    const maxTemp = kelvinToCelsius(main?.temp_max);



  return (
    <div className="pt-6 pb-5 border rounded-lg flex flex-col justify-between dark:bg-gray-950
     shadow-sm dark:shadow-none">Temperature</div>
  )
}

export default Temperature