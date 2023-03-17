// import logo from './logo.svg';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/homePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
