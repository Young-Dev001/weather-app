import React from 'react'
import { useGlobalContext } from '../context/globalContext'



function Temperature() {
    const { forecast } = useGlobalContext();

    const { main, timezone, weather, name } = forecast;

    if (!forecast || !weathe) {
        return <div>Loading...</div>
    }


  return (
    <div className="pt-6 pb-5 border rounded-lg flex flex-col justify-between dark:bg-gray-950">Temperature</div>
  )
}

export default Temperature