import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
