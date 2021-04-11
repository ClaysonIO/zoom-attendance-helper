import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {LoginPage} from "./Pages/LoginPage";
import {HistoryPage} from "./Pages/HistoryPage";
import {EventPage} from "./Pages/EventPage";

function App() {

  return (
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={LoginPage}/>
          <Route path={'/history'} component={HistoryPage}/>
          <Route path={'/event'} component={EventPage}/>
        </Switch>
      </BrowserRouter>
  )
}

export default App;
