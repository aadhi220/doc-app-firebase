import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Auth from './pages/Auth/Auth';
import DocEditor from './pages/DocEditor';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
    <Routes>

      
      <Route path={'/login'} element={<Auth/>} />
      <Route path={'/register'} element={<Auth register/>} />

     
      <Route path={'/'} element={
      <ProtectedRoute>
       <Home/>
       </ProtectedRoute>
      } />
       <Route path="/edit/:id" element={
     
        <DocEditor/>
      }/>
     
    </Routes>
    </div>
  );
}

export default App;
