import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import './style.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { useUserContext } from "./context/UserContext";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="appHome">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : user ? <Home /> : <Auth />}
    </div>
  );
}

export default App;