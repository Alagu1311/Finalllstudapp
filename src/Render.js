
import { useContext } from 'react';
import Base from './Base'
import { Paper } from '@mui/material';
import { studcontxt } from './App';

function Render() {
    const {stud,setstud,studentId,setstudid}=useContext(studcontxt)
    const delfunc = (studentId) => {
        const res = stud.filter((Student) => Student.id !== studentId)
        setstud(res)
    }
  return (
      <div>
          <>
              <Base
                  title={"Rank Holders student Info"}
                  description={"Over All Rank Holders from All The Department"}
              >
              </Base>
                </>
             
              <div className='flex'>
              {stud.map((arr) => (
                
             
           
                  <div className='bor' key={arr.id}>
                        <Paper className='papbor' elevation={3}>
                 
                  <h3>Name:{arr.Name}</h3>
                  <h3>Department:{arr.Dep}</h3>
                  <h3>Semester:{arr.Sem}</h3>
                      <h3>CGPA:{arr.Cgpa}</h3>

                   
                  <div className='btn'>  
                      <button onClick={()=>setstudid(arr.id)}>Edit</button>
                      <button onClick={()=>delfunc(arr.id)}>Delete</button>
                          </div>
                          </Paper>
 

                  </div>
                      
                     
                  
                   
              
              
              ))}
          </div>
          
              
          
                   
        
    </div>
  )
}

export default Render;


