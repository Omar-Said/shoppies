import MainPage from "./Pages/MainPage";
import Shared from "./Pages/Shared";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <div className="App"> */}
        <Route exact path="/" component={MainPage} />
        <Route exact path="/:id" component={Shared} />
        {/* </div> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
