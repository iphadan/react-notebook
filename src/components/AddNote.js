import { useState } from "react";
import NotesService from "../services/NotesService";
import { useNavigate } from 'react-router-dom';


const AddNote = () => {
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [category,setCategory] = useState("programming");
 
    const navigate = useNavigate();
  
   
const saveNote=(e)=>{
    e.preventDefault();
    const note={title , body ,category};
    NotesService.addnote(note).then(response=>{
        console.log("success",response.data);
        navigate('/');
        
       
    }).catch(error=>{
        console.log("something went wrong ", error);
        
    })
};



    return (  

        <div>
            <h1     className="main-content">  Add Note</h1>
            <div className="create">
            <form >
            <div className="form-group">
    <label htmlFor="title">Title <sup>*</sup></label>
    <input id="title" className="form-control" value={title} onChange={(e) =>{setTitle(e.target.value)}}>
    </input>
   

</div>
<div className="form-group">
    <label htmlFor="body">Note Body <sup>*</sup></label>
    <textarea id="body" className="form-control" value={body} onChange={(e) =>{setBody(e.target.value)}}>
    </textarea>
   

</div>
<div className="form-group">
    <label htmlFor="category">Category <sup>*</sup></label>
    <select id="category" className="form-control" value={category} onChange={(e) =>{setCategory(e.target.value)}}>
<option value="programming"> Programming</option>
<option value="coding">coding</option>
<option value="vacation">Vacation</option>
<option value="blogging">Blogging</option>
<option value="meeting">Meeting</option>

    </select>
</div>
<div className="text-center"><button onClick={(e)=>saveNote(e)}>Add Note</ button></div>


            </form></div>
        </div>

    );
}
 
export default AddNote;