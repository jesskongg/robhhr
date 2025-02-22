import React from "react"
import { css } from "@emotion/core"
import colors from "../../colors"

const Projects = props => {
  return (
    <div
      class="project__display"
      display="flex"
      css={css`
        flex-direction: column;
        background-color: #fff;
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
        -moz-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
        box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
        margin: 25px 0;

        @media (min-width: 850px) {
          width: 100%;
          margin: 0 auto;
          -webkit-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.4);
          -moz-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.4);
          box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.4);
        }
      `}
    >
      <h1
        css={css`
          color: ${colors.grey};
          padding: 15px;
          font-weight: 600;
        `}
      >
        {props.title}
      </h1>
      <p
        css={css`
          font-size: 0.875rem;
          padding: 5px 15px;

          @media (min-width: 850px) {
            width: 75%;
            line-height: 2;
          }
        `}
      >
        {props.description}{" "}
      </p>
      <div
        className="project__description"
        css={css`
          padding: 15px 15px 5px 15px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        `}
      >
        {props.skills && props.skills.length
          ? props.skills.map(skill => <span key={skill}>{skill}</span>)
          : null}
      </div>
      <div
        className="project__btn"
        css={css`
          padding: 5px 15px 15px 15px;

          @media (min-width: 850px) {
            display: flex;
            align-items: baseline;
          }
        `}
      >
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            text-decoration: none;
            font-weight: 400;
            display: flex;
            align-items: center;
            -webkit-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
            -moz-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
            box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
            background-color: #f7f7f7;
            border-radius: 5px;
            padding: 5px 8px;
            width: 90px;
          `}
        >
          <span
            className="fa fa-github"
            css={css`
              font-size: 1rem;
            `}
          ></span>
          <span
            css={css`
              font-family: "Poppins", serif;
              font-size: 0.875rem;
              padding: 0 5px;
            `}
          >
            Source
          </span>
        </a>
        <a
          href={props.live}
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            text-decoration: none;
            font-weight: 400;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #dfebf6;
            border-radius: 5px;
            padding: 5px 8px;
            width: 90px;
            margin-top: 10px;
          `}
        >
          <span
            css={css`
              font-family: "Poppins", serif;
              font-size: 0.875rem;
              padding: 0 5px;
            `}
          >
            View
          </span>
          <span
            className="fa fa-external-link"
            css={css`
              font-size: 1rem;
            `}
          ></span>
        </a>
      </div>
    </div>
  )
}

export default Projects
