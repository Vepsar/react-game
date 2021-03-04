import "./App.css";
import react from "react";
import Main from "./mainPage/main";
import Header from "./header/header";
import Footer from "./footer/footer";
import Field from "./game/field";
import Settings from "./settings/settings";
import Score from "./score/score";

import { Route, Switch, HashRouter } from "react-router-dom";
import ConfigProvider from "./game/config";

function App() {
  return (
    <div className="App">
      <HashRouter  basename="/">
        <ConfigProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/game" exact component={Field} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/score" exact component={Score} />
          </Switch>
          <Footer />
        </ConfigProvider>
      </HashRouter>
      
    </div>
  );
}

export default App;
