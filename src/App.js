import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      {/* <Layout /> */}
      <Dashboard />
    </div>
  );
}

export default App;
