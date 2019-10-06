import React from "react"
import Logo from "../../../images/blueLogo.svg"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import colors from "../../colors"

const NavBar = () => {
  return (
    <nav
      css={css`
        position: relative;
        background-color: ${colors.white};
      `}
    >
      <div className="logo">
        <img src={Logo} alt="site-logo" />
      </div>
      <div className="nav-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
