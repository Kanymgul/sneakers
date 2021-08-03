import "./App.css";
import Header from "./components/header/header";
import { Main } from "./pages/main/main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Purchases } from "./pages/my_purchases/my_purchases";
import { Favoutites } from "./pages/favourites/favourites";

function App() {
  return (
    <div className="container">
      <div className="box">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/my_purchases">
              <Purchases/>
            </Route>
            <Route exact path="/favourites">
              <Favoutites/>
            </Route>
            <Route exact path="*">
              <h1>404 page</h1>
              <Link to="/"><button>Вернуться на главную</button></Link>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
