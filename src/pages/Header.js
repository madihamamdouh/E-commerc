import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Header = () => {
  return (
    <>
      <div id="header">
        {/* <!-- Nav --> */}
        <nav id="nav">
          <ul>
            <li>
              <Link className="link fw-bold" to="./Home">
                BURGER KING
              </Link>
            </li>
            <li>
              <Link className="link fw-light" to="./Category">
                Category
              </Link>
              <ul>
                <li>
                  <Link className="link" to="#">
                    Lorem ipsum dolor
                  </Link>
                </li>
                <li>
                  <Link className="link" to="#">
                    Magna phasellus
                  </Link>
                </li>
                <li>
                  <Link className="link" to="#">
                    Etiam dolore nisl
                  </Link>
                </li>
                <li>
                  <Link className="link" to="#">
                    And a submenu &hellip;
                  </Link>
                </li>
                <li>
                  <Link className="link" to="#">
                    Veroeros feugiat
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="link fw-light" to="./cart">
                My Cart
              </Link>
            </li>
            <li>
              <Link className="link fw-light" to="./About">
                About
              </Link>
            </li>
            <li>
              <Link className="link fw-light" to="./login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
