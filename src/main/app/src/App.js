import './App.css'; // Importing the App.css file for styling the application

import { BrowserRouter , Route, Routes } from 'react-router-dom'; // Importing the necessary components from react-router-dom

import HomeUser from './Component/HomeUser'; // Importing the HomeUser component from the Components folder
import Insert from './Component/Insert'; // Importing the Insert component from the Components folder
import Navbar from './Component/Navbar'; // Importing the Navbar component from the Components folder
import InsertItem from './Component/InsertItem'; // Importing the InsertItem component from the Components folder
import UpdateUser from './Component/UpdateUser'; // Importing the UpdateUser component from the Components folder
import HomeLib from './Component/HomeItem'; // Importing the HomeItem component from the Components folder
import Updatelib from './Component/UpdateItem'; // Importing the UpdateItem component from the Components folder
import HomeItem from './Component/HomeItem';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route exact path="/" element={<HomeUser/>}></Route> 
        <Route exact path="/insertus" element={<Insert/>}></Route> 
        <Route exact path="/InsertItem" element={<InsertItem/>}></Route> 
        <Route exact path="/updates/:uid" element={<UpdateUser/>}></Route> 
        <Route exact path="/homelib" element={<HomeItem/>}></Route> 
        {/* <Route exact path="/updatess/:lid" element={<Update/>}></Route>  */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; // Exporting the App component as the default export