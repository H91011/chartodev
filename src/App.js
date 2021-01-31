import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Chart from "./components/chart"
import Table from "./components/table"
import Detail from "./components/detail"
import { useDispatch, useSelector } from "react-redux";


const setData = () => {
  return function (dispatch) {
    fetch('http://www.json-generator.com/api/json/get/bUgMRhYjKG?indent=2')
      .then(response => response.json())
      .then((response) => { dispatch({ type: "SET_DATA", data: response }) })
  }
}

function App() {

  const content = useSelector(state => state); //this hook gives us redux store state
  const dispatch = useDispatch(); //this hook gives us dispatch method
  if (!content.data.graphData) {
    dispatch(setData())
  }
  return (
    <div className="App">
      <div className="App-header">
        <Router>

          <Switch>
            <Route exact path="/">
              <p>Chart</p>

              <Chart />
              <p>Table</p>
              <Table />
            </Route>

            <Route path="/detail/:id">
              <Detail />
            </Route>

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
