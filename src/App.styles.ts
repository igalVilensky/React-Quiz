import styled, { createGlobalStyle } from "styled-components";
import bgimage from "./images/bg.gif";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}
body {
    background-image: url(${bgimage});
    /* background-color:#000; */
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
    color: white;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    background-image: linear-gradient(180deg, #fff, #572780);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #272a80);
    font-size: 70px;
    text-align: center;
    margin: 20px;
    font-weight: 400;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #572780);
    border: 2px solid #272a80;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0px;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
  .setLevel {
    width: 50vw;
  }
  .setLevelButtons {
    display: flex;
    justify-content: center;
  }
  .setlevelHeading {
    color: white;
    display: flex;
    width: 50vw;
    justify-content: center;
  }
  .loading,
  .quizLevelDisplay {
    color: white;
  }
`;
