import './App.css';
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme, GlobalStyles } from "./theme";
import { useEffect, useState } from "react";
import { StyledApp } from "./components/Homepage/index.styles.js";
import HomePage from "./components/Homepage";
import { getuserinfo, adduserinfo } from './components/store/actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const [theme, setTheme] = useState("light");
  const [checked, setChecked] = useState(false);
  const [res, setRes] = useState(null);
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    setChecked(!checked);
  };
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getuserinfo())
  }, [])
  const userinfo = useSelector(state => state.usersinfo)

  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <GlobalStyles />
      <StyledApp>
        <HomePage res={res} toggle={themeToggler} checked={checked} userinfo={userinfo}/>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
