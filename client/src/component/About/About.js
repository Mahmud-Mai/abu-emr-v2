import React, { Component } from "react";
import Navber from "../Navber/Navber";
import { MDBContainer } from "mdbreact";

import "./About.css";
import Homeimage from "../Homeimage";
import Footer from "../Footer";

class About extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Navber />
        <Homeimage />
        <br />

        <br />

        <h1
          className="head text-white"
          align="center"
        >
          {" "}
          About Us{" "}
        </h1>
        <br />
        <br />

        <MDBContainer>
          <blockquote className="blockquote">
            <p className="text-white">
              {" "}
              Lifescape Hospital Ltd is the premier private healthcare provider
              in Nigeria, with three super specialty hospitals in Lagos, Abuja,
              and Port Harcourt, a state-of-the-art daycare centre in Ikeja, and
              another super specialty hospital in Ibadan. The Group takes care
              of around 3.5 million patients annually, conducting more than
              150,000 successful surgeries, with a roster of more than 50,000
              healthcare professionals. An impressive roster of more than 6,000
              doctors and a well-trained force of nursing staff work tirelessly
              across more than 10,000 beds across its four hospitals, backed by
              advanced technologies and latest equipment to treat people and
              save lives. With major changes and developments on its plate, the
              Lifescape Hospital Group is headed towards a path of steady
              growth. LifeScape Hospitals Ltd is all set to add around 7000 beds
              in the near future.
            </p>
          </blockquote>
        </MDBContainer>

        <br></br>
        <Footer />
      </div>
    );
  }
}

export default About;
