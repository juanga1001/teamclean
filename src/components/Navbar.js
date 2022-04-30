import React, { useState } from "react";
import logo from "../images/../images/team-clean-logo-horizontal.png";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";

function Navbar(props) {
  const [menu, setMenu] = useState(false);

  const styles = {
    color: "#2096D3",
    borderBottomStyle: "solid",
    borderWidth: "1px",
  };

  return (
    <div className="Navbar">
      <img src={logo} alt="" className="logo-navbar" />
      <ul>
        <li>
          <PhoneIcon />
          <a href="url">+1 763 242 8709</a>
        </li>
        <li style={styles}>Home</li>
        <li onClick={() => props.handleScroll("Services-container")}>
          Services
        </li>
        <li onClick={() => props.handleScroll("HowItWorks-container")}>
          How It Works
        </li>
        <li onClick={() => props.handleScroll("FAQ-container")}>FAQ</li>
      </ul>

      <div className="mobile-menu">
        {menu && (
          <ul>
            <li style={{ fontWeight: "600" }}>Home</li>
            <li onClick={() => props.handleScroll("About-container")}>
              Services
            </li>
            <li onClick={() => props.handleScroll("Experience-container")}>
              How It Works
            </li>
            <li onClick={() => props.handleScroll("Education-container")}>
              FAQ
            </li>
          </ul>
        )}
        <div className="mobile-menu-icon" onClick={() => setMenu(!menu)}>
          {!menu && <MenuIcon />}
          {menu && <CloseIcon />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
