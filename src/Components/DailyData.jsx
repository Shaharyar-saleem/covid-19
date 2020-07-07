import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { DialogTitle } from "@material-ui/core";
import style from './styling.module.css';

export default function DailyData({ data: { confirmed, recovered, deaths }, country }) {
    console.log(confirmed);
  const [EachDayData, setEachDayData] = useState([]);

  useEffect(() => {
    async function DailyData() {
      const api = await fetch("https://covid19.mathdro.id/api/daily");
      const data = await api.json();
      setEachDayData(data);
    }
    DailyData();
  }, []);

  const lineChart = (EachDayData.length ? (
    <Line
      data={{
        labels: EachDayData.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: EachDayData.map(({ totalConfirmed }) => totalConfirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: EachDayData.map(({ deaths }) => deaths.total),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
          {
            data: EachDayData.map(({ incidentRate }) => incidentRate),
            label: "Incident Rate",
            borderColor: "green",
            backgroundColor: "#00800082",
            fill: true,
          }],
      }}
    />) : null
  );

  const barChart = (
      confirmed 
      ?(
          <Bar
          data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets:[{
                  label: 'People',
                  backgroundColor: [
                      'rgba(0, 0, 255, 0.5)',
                      'rgba(0, 255, 0, 0.5)',
                      'rgba(255, 0, 0, 0.5)',
                  ],
                 data:[confirmed.value, recovered.value, deaths.value],
              }],
          options: { display: false},
          title: { display: true, text: `Current State in !{country}`},
          }}
          />
      ): null
     
  );



  return <div className={style.container, style.chartHeight}>
      {country ? barChart : lineChart}
  </div>
}
