import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Routes from "./routes";
import "./style.css";
import { BreadcrumbsProvider } from "./Components/Breadcrumbs/breadcrumbsContext";
import { SpacingOptions } from "@material-ui/core/styles/createSpacing";

const defaultTheme = createTheme();

export const theme = createTheme({
  palette: {
    primary: {
      main: "#19227c",
      light: "#524aac",
      dark: "#00004f",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#424242",
      light: "#6d6d6d",
      dark: "#1b1b1b",
      contrastText: "#ffffff",
    },
  },
  spacing: (factor: SpacingOptions) => `${factor}rem`,
  typography: {
    htmlFontSize: 16,
    fontFamily: "'Nunito','Roboto','Helvetica',sans-serif",
    h1: {
      fontSize: 38,
      fontWeight: "bold",
      lineHeight: 1.18,
      marginBottom: defaultTheme.spacing(4),
    },
    h2: {
      fontSize: 34,
      fontWeight: "bold",
      lineHeight: 1.3,
      marginBottom: defaultTheme.spacing(3),
    },
    subtitle1: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 1.3,
      marginBottom: defaultTheme.spacing(1.5),
    },
  },
});

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <BreadcrumbsProvider>
          <Routes />
        </BreadcrumbsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
