const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const API_KEY = "a2b4f3dcbb6423c27e6795b25bad9c01";


rl.question("Enter the city you want the temperature of: ", async (CITY)=>{

 try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
   
    console.log(`Weather in ${data.city.name},${data.city.country}`);
    console.log(`Temperature: ${data.list[0].main.temp}°C`);
    
    console.log(`Humidity: ${data.list[0].weather[0].description}`);
    
    console.log(`Wind Speed: ${data.list[0].wind.speed}m/s`)
  } catch (err) {
    console.error("Error fetching weather:", err.message);
  }
rl.close()
})
 



