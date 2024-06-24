import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Navigation from "./components/common/Navigation";
import Home from "./components/pages/Home";
import PrintStatus from "./components/pages/PrintStatus";
import About from "./components/pages/About";
import Subscriptions from "./components/pages/Subscriptions";
import UserSettings from "./components/pages/UserSettings";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <main className="main-content">
          <Router>
            <Route exact path="/" component={Home} />
            <Route path="/print-status" component={PrintStatus} />
            <Route path="/about" component={About} />
            <Route path="/subscriptions" component={Subscriptions} />
            <Route path="/user-settings" component={UserSettings} />
          </Router>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
