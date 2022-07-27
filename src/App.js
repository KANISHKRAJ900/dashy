import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Dashboard from "./Dashboard";
import About from "./Components/Pages/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
