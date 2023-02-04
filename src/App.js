import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductComponent } from './productComponent';
import Button from 'react-bootstrap/Button';



function App() {
  
  return (
    
    <div className="App">
      
        <ProductComponent/>
       </div>
    
  );
}

export default App;
// const [cart,addedCart] = useState (cartData);



