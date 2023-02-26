import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import SignUp from './component/SignUp';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Navigate to="/signup" />} />
     </Routes>
    </div>
  );
}

export default App;
