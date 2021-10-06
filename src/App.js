import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import Apps from './pages/Apps';
import Dashboard from './pages/Dashboard';
import AppConnections from './pages/AppConnections';
import Workflows from './pages/Workflows';


function App() {
  return (
    <div className="App">
      {/* <AppConnections /> */}
      <Workflows />
      {/* <Apps /> */}
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
