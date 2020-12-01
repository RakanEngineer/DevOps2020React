import { Routes } from './routes/Routes'
import { NavigationBar } from './components/navigationbar/NavigationBar'
import './shared/css/GlobalCSS.css'
import { UserProvider } from './shared/provider/UserProvider'

function App() {
  return (   
    <UserProvider>
      <Routes>
        <NavigationBar/>
        </Routes>
    </UserProvider> 
    
  );
}

export default App;
