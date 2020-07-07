import React from "react";
import { Card, CardContent, Typography, Grid, Spacing } from "@material-ui/core";
import CountUp from "react-countup";
import style from "./styling.module.css";
export const DataCards = ({
    data: { confirmed, recovered, deaths, lastUpdate} }) => {
  if (!confirmed) {
    return "loading...";
  }

  return (
    <div>
      <Grid
        container
        spacing={3}
        justify="center"
        className={style.cardContainer}
      >
        <Grid item component={Card} xs={12} md={3} spacing={3} className={style.infected}>
          <CardContent>
            <Typography gutterBottom>INFECTED</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                seprater=","
              />
            </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography varient="body2" className={style.paragraph}>
              Number of Active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} spacing={3} className={style.recovered}>
          <CardContent>
            <Typography gutterBottom>RECOVERED</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                seprater=","
              />
            </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography varient="body2" className={style.paragraph}>
              Number of recovered cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} spacing={3} className={style.deaths}>
          <CardContent>
            <Typography gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                seprater=","
              />
            </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography varient="body2" className={style.paragraph}>
              Number of Deaths cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default DataCards;
