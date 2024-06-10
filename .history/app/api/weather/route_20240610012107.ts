import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
    try {
        const apiKey = process.env.OPENWEATHER_API_KEY;
        const lat = 26.2041
        const lon = 28.0473

        const url = https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={apiKey}

        console.log(url);

    } catch (error) {
        console.log("Eror fetching forecast data");     
         return new Response("Eror fetching forecast data", { status:500 });    
    }
    
}