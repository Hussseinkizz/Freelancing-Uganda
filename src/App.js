import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  Bookings,
  SignUp,
  Login,
  Contact,
  About,
  TCs,
  Page404,
  PasswordReset,
  testComponentsPage
} from "./Pages";

const App = () => {
  return (
    <Router>
      <div id="App">
        <main className="main container pt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/bookings" exact component={Bookings} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={Login} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={About} />
            <Route path="/terms-and-conditions" exact component={TCs} />
            <Route path="/password-reset" exact component={PasswordReset} />
            <Route path="/test" exact component={testComponentsPage} />
            <Route path="*" exact component={Page404} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
