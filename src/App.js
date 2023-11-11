import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Auth from './pages/Auth/Auth';
import DocEditor from './pages/DocEditor';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path={'/'} element={<Auth/>} />
      <Route path={'/register'} element={<Auth register/>} />
      <Route path={'/home'} element={<Home/>} />
      <Route path={'/docName'} element={<DocEditor/>} />
     
    </Routes>
    </div>
  );
}

export default App;
