import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";

import onlinephoto from "../../assets/onlinephoto.png";
import { FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";

function NavbarHeader() {
  const state = useSelector((state) => state.handleBudget);
  return (
    <header>
      <nav className="nav">
        <div className="nav-center">
          <ul className="links-container">
            <li>ارتباط با ما</li>

            <Link to="/">
              <li>خانه</li>
            </Link>
            <li className="budget">
              <FaShoppingBasket />
              <span className="budget-counter">{state.length}</span>
            </li>
          </ul>

          <Link to="/">
            <div className="brand">
              <h2 className="text-logo">HappyLand</h2>
              <img src={onlinephoto} alt="" className="brand-logo" />
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavbarHeader;
