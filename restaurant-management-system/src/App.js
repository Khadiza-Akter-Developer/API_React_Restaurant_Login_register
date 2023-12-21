
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from './Pages/Register';

function App() {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Register/>}/>

      </Routes>
      </BrowserRouter>
    </div>
       
  );
}
export default App;