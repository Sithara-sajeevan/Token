import './App.css';
import Home from './componets/Home';
import Dashboard from './componets/pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Auth from './componets/pages/Auth';
import Admin from './componets/pages/Admin';
import List from './componets/pages/List';
/* import { useContext } from 'react';
import { isAuthTokenContext } from './componets/context/ContextShare';
 */



function App() {
//const {isAuthToken,setIsAuthToken} = useContext(isAuthTokenContext)

  return (
   <>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/login' element={<Auth  />}/>
      <Route path='/admin' element={<Admin  reg />}/>
      <Route path='/adminL' element={<Admin  />}/>
       <Route path='/list' element={<List  />}/>


    </Routes>
    </>
  );
}

export default App;
