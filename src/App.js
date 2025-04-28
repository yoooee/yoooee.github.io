import logo from './logo.svg';
import { Routes, Route, NavLink } from 'react-router-dom';
import Design from './components/Design/Design';
import Development from './components/Development/Development';
import Photography from './components/Photography/Photography';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="design">design</NavLink>
          </li>
          <li>
            <NavLink to="development">development</NavLink>
          </li>
          <li>
            <NavLink to="photography">photography</NavLink>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/design" element={<Design />} />
        <Route path="/development" element={<Development />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </div>
  );
}

export default App;
