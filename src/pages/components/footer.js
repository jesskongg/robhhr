import React from "react"
import { css } from "@emotion/core"
import "font-awesome/css/font-awesome.min.css"

const Footer = () => {
  return (
    <footer
      css={css`
        display: flex;
        position: absolute;
        bottom: 0;
        padding: 15px 0;
      `}
    >
      <ul
        css={css`
          display: flex;
          align-items: baseline;
          padding: 0;
          margin: 0 auto;
        `}
      >
        <li>
          <a
            className="fa fa-github"
            href="https://github.com/robhhr"
            target="_blank"
            rel="noopener noreferrer"
          />
        </li>

        <li>
          <a className="fa fa-envelope" href="mailto:robhhr@outlook.com" />
        </li>
        <li>
          <a
            className="fa fa-twitter"
            href="https://twitter.com/hallorob"
            target="_blank"
            rel="noopener noreferrer"
          />
        </li>
      </ul>
    </footer>
  )
}

export default Footer
