import logo from './logo.svg';
import './App.css';
import Body from './Componentes/Body';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useHistory,
  useParams
} from "react-router-dom";
const App = ()=> {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Body} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
