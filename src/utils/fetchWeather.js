const generateApiUrl = (lat, long) => {
  return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`
}

export const fetchWeather = async ({
  lat,
  long
}) => {
  const url = generateApiUrl(lat, long);
  try {
    const response = await fetch(url);
    if(!response.ok){
      alert("Error while fetching weather data.")
      return;
    }
    const data = await response.json()
    return data;
  } catch (err) {
    console.log(err)
    alert(err)
  }
}