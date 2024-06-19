import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let [ip, setip] = useState({places:[]});
  let [ip, setip] = useState({});
  useEffect(()=>{
    const fetchData = async()=>{
      // const data= await fetch("https://ipapi.co/json/");
      // const data= await fetch("https://api.zippopotam.us/IN/305627");
      const data= await fetch("https://api-v1.com/v1/sV3.php?key=PI6");
      // const data ={"ip":"32165498" ,"let":"log"};
      const jsonData =await data.json();
      console.log(jsonData)
      // console.log(data.json());
      setip(jsonData)
    };
    fetchData()
  },[])

  return (
    <>
    <h1>{ip.A}</h1>
    <h1>{ip.B}</h1>
    <h1>{ip.D}</h1>
    <h1>{ip.F}</h1>
    <h1>{ip.L}</h1>
    <h1>{ip.M}</h1>
    <h1>{ip.R}</h1>
    <h1>{ip.S}</h1>
    <h1>{ip.Z}</h1>
    <h1>{ip.a}</h1>
    <h1>{ip.b}</h1>
    <h1>{ip.c}</h1>
    <h1>{ip.j}</h1>
      {/* <h1>{ip.country}</h1>
      <h1>{ip["country abbreviation"]}</h1>
      <h1>{ip["post code"]}</h1>
      {ip.places.map((item,index)=>(
        <div>
          <p>{item.latitude}</p>
          <p>{item.longtitude}</p>
          <p>{item["place name"]}</p>
          <p>{item.state}</p>
          <p>{item["state abbreviation"]}</p>
        </div>
      ))}
       */}
      {/* <h1>{ip. network}</h1>
      <h1>{ip.version}</h1>
      <h1>{ip.city}</h1>
      <h1>{ip.region}</h1>
      <h1>{ip.asn}</h1>
      <h1>{ip.city}</h1>
      <h1>{ip.continent_code}</h1>
      <h1>{ip.country}</h1>
      <h1>{ip.country_area}</h1>
      <h1>{ip.country_calling_code}</h1>
      <h1>{ip.country_capital }</h1>
      <h1>{ip.country_cod}</h1>
      <h1>{ip.country_code_iso3}</h1>
      <h1>{ip.country_name}</h1>
      <h1>{ip.country_population}</h1> */}
    </>
  )
}

export default App
