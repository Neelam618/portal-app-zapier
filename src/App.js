import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import Apps from './pages/Apps';
import Dashboard from './pages/Dashboard';
import AppConnections from './pages/AppConnections';
import Workflows from './pages/Workflows';
import CreateWorkflow from './pages/CreateWorkflow'
import './style.css'
import PlatformUi from './pages/platformUI/PlatformUi';


function App() {
  return (
    <div className="App">
      {/* <AppConnections /> */}
      {/* <Workflows /> */}
      <CreateWorkflow />
      {/* <Apps /> */}
      {/* <Dashboard /> */}
      {/* <PlatformUi /> */}
    </div>
  );
}

export default App;
