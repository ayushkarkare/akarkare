import React from "react";
import styled from "styled-components";
import resume from "./Images/Karkare_Ayush.pdf"

const Button = () => {
    return (
      <StyledWrapper>
        {/* Wrap the button in an anchor tag to handle the download */}
        <a href={resume} download="Karkare_Ayush.pdf" className="no-underline">
          <button type="button" className="button">
            <span className="button__text">Download Resume</span>
            <span className="button__icon">
              <svg
                className="svg"
                data-name="Layer 2"
                id="bdd05811-e15d-428c-bb53-8661459f9307"
                viewBox="0 0 35 35"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z" />
                <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z" />
                <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z" />
              </svg>
            </span>
          </button>
        </a>
      </StyledWrapper>
    );
  };

const StyledWrapper = styled.div`
  .button {
  --main-focus: #ff003d;
  --font-color: #f4e9e1;
  --bg-color-sub: #ff003d;
  --bg-color: #ff003d;
  --main-color: #f4e9e1;
  position: relative;
  width: 190px;
  height: 40px;
  scale: 120%;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  background-color: var(--bg-color);
  border-radius: 10px;
  overflow: hidden;
  margin-top: 6%;
}

.no-underline {
  text-decoration: none;    
}
.button, .button__icon, .button__text {
  transition: all 0.3s;
}

.button .button__text {
  transform: translateX(21px);
  color: var(--font-color);
  font-weight: 600;
}

.button .button__icon {
  position: absolute;
  transform: translateX(109px);
  height: 100%;
  width: 39px;
  background-color: var(--bg-color-sub);
  display: flex;
  align-items: right;
  justify-content: center;
  margin-left: 18%;
}

.button .svg {
  width: 20px;
  fill: var(--main-color);
}

.button:hover {
  background: var(--bg-color);
}

.button:hover .button__text {
  color: transparent;
}

.button:hover .button__icon {
  width: 148px;
  transform: translateX(-20px);
}

.button:active {
  transform: translate(3px, 3px);
  box-shadow: 0px 0px var(--main-color);
}
`;

export default Button;
