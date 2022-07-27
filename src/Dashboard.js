import {
  ChevronRight,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import React, { useState } from "react";
import Header from "./Components/Header/Header";
import "./Main.css";
import { Link } from "react-router-dom";
// import Guide from "./Components/SmComponents/Guide";
// import "./Components/SmComponents/sm.css";

export default function Dashboard() {
  const [slide, setSlide] = useState(1);
  const [change, setChange] = useState();

  const next = () => {
    setSlide(slide + 1);
    if (slide > 3) {
      setSlide(1);
    }
  };
  const prev = () => {
    setSlide(slide - 1);
    if (slide < 2) {
      setSlide(4);
    }
  };
  const location = window.location.pathname;
  console.log("location", location);
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-sm-3  mt-5">
            <div className="title ">Rahil</div>
            <div onClick={next}>
              <KeyboardArrowUp sx={{ fontSize: "80px", color: "white" }} />
            </div>
            <div className="mx-3 mt-0 mb-0 text-white">
              <h3>{slide === 1 ? "slide 1" : ""}</h3>
              <h3>{slide === 2 ? "slide 2" : ""}</h3>
              <h3>{slide === 3 ? "slide 3" : ""}</h3>
              <h3>{slide === 4 ? "slide 4" : ""}</h3>
            </div>

            <div onClick={prev}>
              <KeyboardArrowDown sx={{ fontSize: "80px", color: "white" }} />
            </div>
            <div>
              <h5 className="explore">
                Explore <ChevronRight className="chevronright" />
              </h5>
            </div>
          </div>

          <div className="col-sm-9">
            <div className="cars">
              <Link to="/dashboard">
                <img
                  className={slide === 1 ? "active" : "imgstyle"}
                  src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
                  alt=""
                />
              </Link>
              <Link to="/about">
                <img
                  className={slide === 2 ? "active" : "imgstyle"}
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*"
                  alt=""
                />
              </Link>
              <Link to="/contact">
                <img
                  className={slide === 3 ? "active" : "imgstyle"}
                  src="https://cdn.luxe.digital/media/2020/12/15110730/fastest-cars-world-2021-hennessey-venom-GT-luxe-digital%402x.jpg"
                  alt=""
                />
              </Link>
              <Link to="/social">
                <img
                  className={slide === 4 ? "active" : "imgstyle"}
                  src="https://i.ytimg.com/vi/tArC9-RHmU4/maxresdefault.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h2>{location === "/dashboard" ? "Dashboard" : ""} </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
