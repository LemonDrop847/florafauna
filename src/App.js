// import logo from './logo.svg';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/homePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePost from './pages/createPost';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route path="/CreatePost" element={<CreatePost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
