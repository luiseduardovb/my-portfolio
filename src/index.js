import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ReactLoading from "react-loading";
import reportWebVitals from "./reportWebVitals";

//Components
import App from "./App";

// Material UI
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/styles/theme";

// Translation
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense
        fallback={
          <ReactLoading
            type={"spinningBubbles"}
            color={"#fff"}
            height={100}
            width={100}
          />
        }
      >
        <div>
          <Router>
            <App />
          </Router>
        </div>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
