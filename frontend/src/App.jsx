import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login'
import Register from './Register/Register';

function App() {
  const routes = (
    <Router>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
      </Routes>
    </Router>
  )
  return (
    <div>{routes}</div>
  )
}

export default App
