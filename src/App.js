import React from "react";
import Header from "./components/Header/Header";
import Routes from "./Routes";

const App = (props) => {
  console.log(props);
  return (
    <div>
      <Header />
      <div className="container">
        <Routes />
      </div>
    </div>
  );
};

export default App;
