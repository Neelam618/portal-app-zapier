import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import './style.css'
import Home from './pages/Home'
import Auth from './components/Auth'
import { useUserContext } from "./context/UserContext";

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Home /> : <Auth />} </>}
    </div>
  );
}

export default App;