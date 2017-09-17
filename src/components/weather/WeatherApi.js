import axios from 'axios'
const appCode ='188d33cc566245ab9e508fc2e3e923d1';
export default var WeatherApi = {
 gpsToWeather:function(lat, lng){
    let params = {
      "from": "3",
      "lat": lat,
      "lng": lng,
      "need3HourForcast": "0",
      "needAlarm": "0",
      "needHourData": "1",
      "needIndex": "1",
      "needMoreDay": "1"
    }
   return axios.get('/gps-to-weather',{
      params:params
   });
 } 
}