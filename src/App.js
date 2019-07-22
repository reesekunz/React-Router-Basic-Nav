import React from "react";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";

// import Route inside your `app.js` file.
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <Navigation />
    {/* // Declarative - I have a Route that, when it is at the url path /About, it will render the component About  */}
    {/* // Be sure to add 'exact' prop to home page so home component wont still render when youre on other pages  */}
    <Route path="/" exact component={Home} />
    <Route path="/About/" component={About} />
    <Route path="/Contact/" component={Contact} />
  </div>
);

export default App;
