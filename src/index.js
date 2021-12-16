import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import { UserContextProvider } from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </Router>,
  </React.StrictMode>,
  document.getElementById('root')
);
