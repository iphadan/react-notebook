import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotesService from "../services/NotesService";
import { useNavigate } from 'react-router-dom';

const NoteDetail =() => {
    const {id} = useParams();
    const [currentNote,setCurrentNote]=useState("");   
    const navigate = useNavigate(); 
    useEffect(()=>{
    
NotesService.readNote(id).then(note=>{
    console.log("exist",note);
    setCurrentNote(note.data);
}).catch(error=>{
    console.log("note does not exist",id);
})


    
    },[]);
const deleteNoteHandler =()=>{
    NotesService.deleteNote(currentNote.id).then(response=>{
        console.log("deleted successfully ",response.data);
        navigate("/")

    }).catch(error=>{
        console.log("something went wrong",error)
    })
}

    return (
        <div className="note-detail main-content">
            <h5 className="text-capitalize primary-color ">
{currentNote.title}
            </h5>
            <div className="mb-3 font-italic metadata"></div>
<span>{currentNote.updatedAt}</span>
<span className="text-capitalize">, {currentNote.category}</span>
        <div className="mb-3">{currentNote.body}</div>


<div><button className="ml-3 mr-3">Edit</button> <button onClick={()=>{deleteNoteHandler()}}>Delete</button></div>
        </div>
        
    );}
 
export default NoteDetail;