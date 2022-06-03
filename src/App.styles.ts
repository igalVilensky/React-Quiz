import styled, { createGlobalStyle } from "styled-components";
import bgimage from "./images/bg.jpg";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}
body {
    background-image: url(${bgimage});
    background-size: cover;
    display: flex;
    margin: 0; 
    padding: 0;
    justify-content: center;
}

*{
    box-sizing: border-box;
    font-family: "Catamaran", sans-serif;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: black;
  }
  .score {
    color: black;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    background-image: linear-gradient(180deg, #fff, #67a1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
    font-weight: 400;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0px;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
