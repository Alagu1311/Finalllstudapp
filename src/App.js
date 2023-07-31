
import './App.css';
import {createContext, useState} from 'react'
import studdata from './Student';
import { Routes, Route } from 'react-router-dom';
import Render from './Render';
import Addstud from './Addstud';
import Editstud from './Editstud';
import Content from './Content';
import Base from './Base';


export const studcontxt=createContext(null)
function App() {
  const [stud, setstud] = useState(studdata)
  const [studid,setstudid]=useState("")
  
  return (
    <div className="App">
   
      <studcontxt.Provider
        value={{stud,setstud,studid,setstudid}}
      >
        <Base/>
      <Routes>
       <Route exact path='/' element={<Content/>}/>
         <Route path='/Render' element={<Render/>} />
        <Route path='/Addstud' element={<Addstud />} />
          <Route path='/Editstud' element={<Editstud />} />
          <Route path='/content' element={<Content/>}/>
        </Routes>
        </studcontxt.Provider>
      
      
     
    </div>
  );
}

export default App;
