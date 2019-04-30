import React from "react";
import NavigationBar from "../components/Navigationbar";
import Typography from "@material-ui/core/Typography";
import Grid from "../components/homepage/grid";
import WhatWeDo from "../components/homepage/whatwedo";
import source from "../../static/hero.mp4";

const containerStyles = {
  display: `grid`,
  justifyContent: `center`
};

const videoStyles = {
  maxWidth: `100%`,
  maxHeight: `75vh`,
  marginTop: `60px`
};

const headingText = {
  fontFamily: `Montserrat`,
  fontSize: `40px`,
  color: `#6d48e5`,
  marginTop: `-10px`
};

const hrStyle = {
  width: `20%`,
  color: `black`,
  height: `2px`,
  marginBottom: `3%`
};

const innerPara = {
  fontSize: `1.125rem`,
  fontFamily: `Montserrat`,
  marginBottom: `5%`,
  lineHeight: `2`
};

const section = {
  marginBottom: `10%`
};

export default () => {
  return (
    <div>
      <NavigationBar />

      <div style={containerStyles}>
        <video style={videoStyles} autoPlay loop muted src={source} />
      </div>

      <div className="container">
        <Typography
          component="h2"
          align="center"
          variant="h5"
          style={headingText}
        >
          WONDER <br />
          THINK <br />
          CREATE <br />
        </Typography>
      </div>

      <hr style={hrStyle} />

      <div className="container">
        <Typography
          component="h2"
          align="center"
          variant="h5"
          gutterBottom
          style={innerPara}
        >
          ZAIRZA is a cult for CETians who want to be ahead in the game. Sure we
          all have talent, in this club we put our talents through many
          obstacles and we conquer them. We walk out as winners who not only
          read books all these years but test the theories and sometimes make
          our own.
        </Typography>
      </div>

      <div className="container-fluid" style={section}>
        <Grid />
      </div>
      <Typography
        component="h2"
        align="center"
        variant="h5"
        gutterBottom
        style={headingText}
      >
        What We Do
      </Typography>
      <hr style={hrStyle} />
      <div class="container">
        <Typography
          component="h2"
          align="justify"
          variant="h5"
          gutterBottom
          style={innerPara}
        >
          Extensive research and development is carried out which equips the
          members with knowledge on various technological fields. Members are
          actively engaged in taking the society to greater height through their
          continuous efforts in the field of Engineering. The legacy of Zairza
          flows down through each batch of CET which empowers us to stand ahead
          of our counterparts.
        </Typography>
      </div>
      <div className="container" style={section}>
        <WhatWeDo />
      </div>
    </div>
  );
};
