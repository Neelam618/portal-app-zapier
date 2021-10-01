import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import Apps from './pages/Apps';
import Dashboard from './pages/Dashboard';
import AppConnections from './pages/AppConnections';
import Zaps from './pages/Zaps';


function App() {
  return (
    <div className="App">
      <Zaps />
      {/* <Apps /> */}
      {/* <Dashboard /> */}
      {/* <AppConnections /> */}
    </div>
  );
}

export default App;
