// import logo from './logo.svg';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import About from './pages/about';
=======
import Navbar from './components/navbar';
>>>>>>> a7432f54211b75f26ee46a9a99493e000992a8ae
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
<<<<<<< HEAD
          <Route exact path="/about" element={<About/>}/>
=======
          
          <Route path="/CreatePost" element={<CreatePost/>}/>
>>>>>>> a7432f54211b75f26ee46a9a99493e000992a8ae
        </Routes>
      </Router>
    </div>
  );
}

export default App;
