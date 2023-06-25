
import './App.css';
import {useState} from 'react'
import studdata from './Student';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Render from './Render';
import Addstud from './Addstud';
import Editstud from './Editstud';



function App() {
  const [stud, setstud] = useState(studdata)
  const [studid,setstudid]=useState("")
  
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/Render' element={<Render
          stud={stud}
          setstud={setstud} />} />
        <Route path='/Addstud' element={<Addstud
          stud={stud}
          setstud={setstud} />} />
        <Route path='/Editstud' element={<Editstud
          stud={stud}
          setstud={setstud}
        />} />
      </Routes>
      
      
     
    </div>
  );
}

export default App;
