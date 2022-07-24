import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import Company from "./AboutCompany";
import Team from "./AboutTeam";
import "./style.css";
const About = () => {
  const location = useLocation();
  const { id, name } = useParams();
  console.log(location);
  console.log(id, name);
  const queryS = queryString.parse(location.search);
  console.log(queryS);
  return (
    <div className="mt-5 bg-black h-100 text-light">
      <div className="container mt-5 ">
        <div className="h-150 w-100">{" gg"}</div>
        <h1>ABOUT US</h1>
        <div class="row mt-4 ">
          <div className="col-3 mt-2">
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
