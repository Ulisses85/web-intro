import React from "react";
import Typical from "react-typical";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:200,100,400"
          rel="stylesheet"
          type="text/css"
        />
        <h1>
          <span className="string-highlight">&lt; Lukasz Kuligowski /&gt;</span>{" "}
          software developer
        </h1>
        <div className="seperator"></div>
        <h2>
          He is
          <Typical
            className="txt-rotate string-highlight"
            loop={Infinity}
            wrapper="b"
            steps={[
              " nerdy. ",
              1500,
              " an IoT enthusiast. ",
              1500,
              " is Brazilian Jiu-Jitsu fanatic 🥋",
              1500,
              " ALL YOU NEED!! ",
              3000,
            ]}
          />
        </h2>
      </header>
    </div>
  );
}

export default App;
