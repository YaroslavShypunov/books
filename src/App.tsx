import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import BookPage from "./pages/bookPage/BookPage";
import ROUTES from "./constants/routes";
import { Provider as StoreProvider } from "react-redux";
import { store } from './store';

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path={`${ROUTES.BOOK}/:id`} element={<BookPage />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
        </Routes>
      </Router >

    </StoreProvider>
  );
}

export default App;
