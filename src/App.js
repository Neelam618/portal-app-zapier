import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import Apps from './pages/Apps';
import Dashboard from './pages/Home';
import AppConnections from './pages/AppConnections';
import Workflows from './pages/Workflows';
import CreateWorkflow from './pages/CreateWorkflow'
import './style.css'
import PlatformUi from './pages/platformUI/PlatformUi';
import Home from './pages/Home'


function App() {
  return (
    <div className="App">
      {/* <AppConnections /> */}
      {/* <Workflows /> */}
      {/* <CreateWorkflow /> */}
      {/* <Apps /> */}
      <Home />
      {/* <PlatformUi /> */}
    </div>
  );
}

export default App;
