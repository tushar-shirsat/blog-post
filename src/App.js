import Home from "./Home";
import "./App.css";
import Navbar from "./componant/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewStorie from "./NewStorie";
import { useEffect } from "react";
import { useProvider } from "./context";
import { db } from "./firebase";
import Stories from "./Stories";
import Blog from "./Blog";
import Article from "./Article";
function App() {
  const [state, dispatch] = useProvider();
  useEffect(() => {
    db.collection("posts")
      .orderBy("tiemstamp", "desc")
      .onSnapshot((snapshot) => {
        dispatch({
          type: "ADD_STORIES",
          payload: snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })),
        });
      });
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/story/:type">
            <NewStorie />
          </Route>
          <Route path="/stories">
            <Stories />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/article/:postId">
            <Article />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
