import { useEffect, useState } from "react";
import NotesService from "../services/NotesService";
import {Link} from "react-router-dom"
const NotesList = () => {
    const [notes,setNotes]=useState([]);  
    useEffect(()=>{
         NotesService.getAll()
         .then(response=>{
            console.log("printing response",response.data);
            setNotes(response.data);
         })
        .catch(error=>{
            console.log("something went wrong",error);
        })
    },[]);
    
    return ( 

        <div className="main-content">
<h4>
    List of Notes
</h4>  
 <div className="notes-list mt-4">
{
    
   notes && notes.map(notes=>(
   
        <div key={notes.id} className="notes-preview mt-3">
           <Link to={`/notedetail/${notes.id}`}>
           <h5 className="primary-color text-capitalize">{notes.body}</h5>
            <p>{notes.title}</p>
           
           
           </Link>
        </div>
    ))
}
</div>
        </div>
    );
}
 
export default NotesList ;