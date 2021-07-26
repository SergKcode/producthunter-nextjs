import React from "react";
import { ThemeProvider } from "styled-components";


const theme = {
    colors : {
        primary : "#1D4A7E",
        secondary : "#2FB695",
        orange:"#DA552F",
        white:"#FFFFFF",
        black:"#000",
        red:"#DA552F"
        


    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  
  export default Theme;