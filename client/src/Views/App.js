import "./App.css";
import { StateProvider } from "../Model/state";
import Header from "./Common/Header/Header";
import Middle from "./Middle/Middle";
import React from "react";
import { Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import FullReview from "./Common/FullReview/FullReview";
import LatestReviews from "./Middle/LatestReviews/LatestReviews";

const history = createBrowserHistory();

function App() {
  const appState = {
    selectedReviewFromAppState: "",
    FindGameReviewSearchBarValue: ""
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "selectedReviewFromAppState":
        return {
          ...state,
          selectedReviewFromAppState: action.payload
        };
      case "":
        return {
          ...state,
          count: action.payload
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider appState={appState} reducer={reducer}>
      <Router history={history}>
        <div className="App">
          <Header />
          <Route
            exact
            path="/#/"
            render={() => <LatestReviews history={history} />}
          />
          <Route
            path="/#/latestReviews"
            render={() => <Middle history={history} />}
          />
          <Route
            path="/#/addReview"
            render={() => <Middle history={history} />}
          />
          <Route
            path="/#/findReview"
            render={() => <Middle history={history} />}
          />
          <Route
            path="/#/FullReview"
            render={() => <FullReview history={history} />}
          />
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
