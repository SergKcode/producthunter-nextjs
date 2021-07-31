import React from "react";
import { ThemeProvider } from "styled-components";


const theme = {
    colors : {
        primary : "#DA552F",
        secondary : "#2FB695",
        blue:"#1D4A7E",
        white:"#FFFFFF",
        black:"#000",
        red:"#DA552F",
        
        


    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  
  export default Theme;