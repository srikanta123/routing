
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminPage from './component/AdminPage';
import DashboardPage from './component/DashboardPage';
import Login from './component/Login';
import HelpPage from './component/HelpPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/admin" exact element={<AdminPage/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/help" element={<HelpPage/>} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
