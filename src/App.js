import { useState } from "react"
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import './style.css'
import Home from './pages/Home'
import Auth from './components/Auth'

function App() {
  const [user] = useState(false)
  return (
    <div className="App">
      {
        user ? <Home /> : <Auth />
      }
    </div>
  );
}

export default App;
