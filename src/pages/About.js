import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import Company from "./AboutCompany";
import Team from "./AboutTeam";
import "./style.css";
const About = () => {

  return (
    <div className="mt-5 bg-black h-100 text-light" id="aboutContainer">
      <div className="container mt-5 ">
        <h1>ABOUT US</h1>
        <div class="row mt-2 ">
          <div className="col-3 ">
            <Link
              className="d-block text-decoration-none text-light fw-light"
              to="/About/team"
            >
              About Team
            </Link>
            <Link
              className="d-block text-decoration-none text-light fw-light"
              to="/About/company"
            >
              About Company
            </Link>
          </div>
          <div className="col-9">
            <Routes>
              <Route path="company" element={<Company />} />
              <Route path="team" element={<Team />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
