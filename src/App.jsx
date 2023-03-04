import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss'
import AnimatedRoutes from './components/utils/AnimatedRoutes';

function App() {

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
