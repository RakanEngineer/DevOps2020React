import React from 'react'
import { Routes } from './routes/Routes'
import { NavigationBar } from './components/navigationbar/NavigationBar'
import './shared/css/GlobalCSS.css'
import { UserProvider } from './shared/provider/UserProvider'
import { MyFirstComponent } from './components/myfirstcomponent/MyFirstComponent'

function App() {
  return (   
    <UserProvider>
      <Routes>
        <NavigationBar/>
        <MyFirstComponent name="Arasto" age="40"/>
        </Routes>
    </UserProvider> 
    
  );
}

export default App;
