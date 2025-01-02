import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login'
import Register from './Register/Register';
import Home from './Home/Home';

function App() {
  const routes = (
    <Router>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
        <Route path='/home' exact element={<Home />} />
      </Routes>
    </Router>
  )
  return (
    <div>{routes}</div>
  )
}

export default App
