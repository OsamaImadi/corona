import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import ReactApexChart from "react-apexcharts";


import './index.css'

const WorldGraph = () => {

          
  const [worldData, setWorldData] = useState();
  const [cases, setCases] = useState();
  const [deaths, setDeaths] = useState();
  const [recovered, setRecovered] = useState();

  useEffect(() => {
    axios.get('https://covidapi.info/api/v1/global/count')
          .then((data) => {
            let keys = Object.keys(data.data.result);
            let values = Object.values(data.data.result)
            setWorldData(keys);
            setCases(values)
            console.log("WORLD DATA",values ? values.map(r=>r.confirmed): values)
          });
  }, []);

  

  let series = [
    {
    name: "Confirmed Cases",
    data: cases ? cases.map(r=>r.confirmed): cases
  },
    {
    name: "Confirmed Cases",
    data: cases ? cases.map(r=>r.deaths): cases
  },
    {
    name: "Confirmed Cases",
    data: cases ? cases.map(r=>r.recovered): cases
  }
]
  let optionsGraph = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Graphical Representation',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: worldData? worldData.map((r) => r):worldData,
    }
  }

  return ( 
    <>
    <div className="mt-5">
    <ReactApexChart options={optionsGraph} series={series} type="line" height={350} />
    </div>
    </>
   );
}
 
export default WorldGraph;