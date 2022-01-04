import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Left from "./Components/Left";
import Right from "./Components/Right";
import env from 'dotenv'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
`;
const App = () => {
    const [cityList, setCityList] = useState({});
    const [city, setCity] = useState({});
    const [weather, setWeather] = useState(null);
    const [time, setTime] = useState(null);
    
    // const [cityList, setCityList] = useState({});
    useEffect(() => {
      const getWeatherDetails=async()=>{
        const cities = {
              id: 6619347,
              name: "Navi Mumbai",
              state: "",
              country: "IN",
              coord: {
                  lon: 73.015823,
                  lat: 19.03681,
              },
          };
          try {
            const wthr= await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cities.id}&appid=${APIKEY}`)
            setWeather(wthr.data)
            console.log(wthr);
            // console.log(JSON.stringify(wthr.data))
          } catch (error) {
            console.log(error);
          }
          
          // console.log(cities);


      }  
      getWeatherDetails()
    }, []);
    useEffect(() => {
      const interval = setInterval(() => {
        
        const time= new Date()
        // console.log("hi");
        setTime(time)
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    
    return (
        <Container>
            <Left allWeather={weather} nowTime={time}/>
            <Right />
        </Container>
    );
};

export default App;
