// import logo from './logo.svg';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/homePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePost from './pages/createPost';
import PostFeed from './pages/postFeed';
import MyPosts from './pages/myPosts';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/Feed" element={<PostFeed/>}/>
          <Route exact path="/MyPosts" element={<MyPosts/>}/>
          <Route exact path="/CreatePost" element={<CreatePost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
