import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import News from './components/Pages/News'
import Movies from './components/Pages/Movies'
import Music from './components/Pages/Music'
import Games from './components/Pages/Games'
import GameStreams from './components/Content/GameStreams';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
          <Route path= "/" element= {<Register/>}/>
          <Route path= "/login" element= {<Login/>}/>
          <Route path= "/profile" element= {<Profile/>}/>
          <Route path= "/news" element= {<News/>}/>
          <Route path= "/movies" element= {<Movies/>}/>
          <Route path= "/music" element= {<Music/>}/>
          <Route exact path= "/games" element= {<Games/>} />
          <Route path= "/games/:id" element= {<GameStreams />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
