
import './App.css';
import {createContext, useState} from 'react'
import studdata from './Student';
import { Routes, Route } from 'react-router-dom';
import Render from './Render';
import Addstud from './Addstud';
import Editstud from './Editstud';
import Base from './Base';
import Content from './Content';


export const studcontxt=createContext(null)
function App() {
  const [stud, setstud] = useState(studdata)
  const [studid,setstudid]=useState("")
  
  return (
    <div className="App">
     <Base/>
      <studcontxt.Provider
        value={{stud,setstud,studid,setstudid}}
      >
      <Routes>
         <Route exact path='/' element={<Base/>} />
         <Route path='/Render' element={<Render />} />
        <Route path='/Addstud' element={<Addstud />} />
          <Route path='/Editstud' element={<Editstud />} />
          <Route path='/content' element={<Content/>}/>
        </Routes>
        </studcontxt.Provider>
      
      
     
    </div>
  );
}

export default App;
