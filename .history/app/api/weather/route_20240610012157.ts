import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const apiKey = process.env.OPENWEATHER_API_KEY;
        const lat = 26.2041;
        const lon = 28.0473;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        return res.status(200).json(data);

    } catch (error) {
        console.error("Error fetching forecast data:", error);
        return res.status(500).json({ message: "Error fetching forecast data" });
    }
}
