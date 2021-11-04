import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import AddUser from "./components/pages/users/AddUser"
import EditUser from "./components/pages/users/EditUser"
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';



function App() {

  

  

  return (
    <Router>
      <div className="App">
      {/* <h1>Hello World</h1> */}
      {/* <Navbar /> */}

      <Switch>
      <Route exact path="/" component={() => <Home heading={`Student Detaiasdasdls`}  />}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/students/add" component={AddUser} />
      <Route exact path="/students/edit/:id" component={EditUser} />
      </Switch>
    </div>

    </Router>
  );
}

export default App;
