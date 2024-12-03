
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import './assets/boxicons/css/boxicons.min.css'
import Homepage from './pages/Homepage';
import Checkout from './pages/Checkout'
import { useState } from 'react';
import Admin from './pages/Admin';
import Orders from './pages/Orders'
import Addproducts from './pages/Addproducts';
import DeleteProducts from './pages/DeleteProducts';
import EditProfile from './pages/EditProfile';


function App() {

  const [product,setProduct]=useState([])

  console.log(product)
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage  setProduct={setProduct} />}></Route>
        <Route path='/Checkout' element={<Checkout product={product} />}></Route>
        <Route path='/Adminpanel' element={<Admin/>}></Route>
        <Route path='/Adminpanel/Orders' element={<Orders/>} ></Route>
        <Route path='/Adminpanel/AddProducts' element={<Addproducts/>}></Route>
        <Route path='/Adminpanel/DeleteProducts' element={<DeleteProducts/>}></Route>
        <Route path='/Adminpanel/UpdateProfile' element={<EditProfile/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
