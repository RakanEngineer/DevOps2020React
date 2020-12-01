import { Routes } from './routes/Routes'
import { NavigationBar } from './components/navigationbar/NavigationBar'
import './shared/css/GlobalCSS.css'

function App() {
  return (    
    <Routes>
      <NavigationBar/>      
      <h1>Hej devops 2020</h1>        
    </Routes>
  );
}

export default App;
