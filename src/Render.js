
import Base from './Base'


function Render({ stud, setstud,studentId,setstudid }) {
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
                 
                  <h3>Name:{arr.Name}</h3>
                  <h3>Department:{arr.Dep}</h3>
                  <h3>Semester:{arr.Sem}</h3>
                      <h3>CGPA:{arr.Cgpa}</h3>

                   
                  <div className='btn'>  
                      <button onClick={()=>setstudid(arr.id)}>Edit</button>
                      <button onClick={()=>delfunc(arr.id)}>Delete</button>
                      </div>
 

                  </div>
                      
                     
                  
                   
              
              
              ))}
          </div>
          
                   
        
    </div>
  )
}

export default Render;


