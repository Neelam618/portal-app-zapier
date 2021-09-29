import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import Apps from './pages/Apps';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Apps />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
