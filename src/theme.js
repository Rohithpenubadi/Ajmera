import { createGlobalStyle } from "styled-components";

export const LightTheme = {
  fontColor: "#000000",
  bodybackgroundColor: "#f9fafb",
  backgroundColor: "#ffffff",
  filterColor: "#192024",
  borderColor: "solid 1px #363f45"
};

export const DarkTheme = {
  fontColor: "#fff",
  filterColor: "#f9fafb",
  bodybackgroundColor: "#28282B",
  backgroundColor: "black",
  borderColor: "solid 1px #fff"
};

export const GlobalStyles = createGlobalStyle`
  body {
    overflow-x: hidden;
    position: relative;
    margin: 0px;
    background-color : ${(props) => props.theme.bodybackgroundColor};
  }
`;
