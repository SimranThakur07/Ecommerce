import { Box } from "@mui/material";
import React from "react";
import img from "../../assets/strapi-images/mohamad-javad-barakouhi-rJvs1om1G0o-unsplash.jpeg";

const About = () => {


  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="50%">
        <h2> About Us</h2>
        <Box fontWeight="bold" lineHeight="25px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          adipisci, dolor laboriosam mollitia odio exercitationem consectetur
          repellat ipsam praesentium blanditiis neque reprehenderit quis earum?
          Iste doloremque incidunt in sint? Optio, aspernatur. Totam sed, esse
          quos porro inventore beatae voluptatum laudantium doloribus, hic in,
          itaque id.
        </Box>
      </Box>
      <Box>
        <img src={img} alt="" width="300px" height="400px"/>
      </Box>
    </Box>
  );
};

export default About;
