import React from 'react'
import { useGlobalContext } from '../context/globalContext'



function Temperature() {
    const { forecast } = useGlobalContext();

    const { main, timezone, weather, name } = forecast;

    if (!forecast || !weathe) {
        return <div>Loading...</div>
    }


  return (
    <div>Temperature</div>
  )
}

export default Temperature