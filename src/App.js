import  React from 'react';
import {BrowserRouter} from 'react-router-dom';
import "./css/main.css"
import './css/bootstrap.min.css'    
import './css/all.min.css'  
import './css/animate.css'  
import './css/magnific-popup.css'  
import './css/owl.min.css'
import './css/flaticon.css'  
import './css/odometer.css'
import { AppRouter } from './pages/components/AppRouter';



function App() {
  return (
 
   <BrowserRouter>
       <AppRouter />
   </BrowserRouter>
  );
}

export default App;
