import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Main from "./components/Main";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/main" component={Main} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
