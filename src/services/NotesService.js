import httpClient from "../http-common";
const getAll=()=>{
    return httpClient.get("/getall");
}


const addnote = note => {
    return httpClient.post("/addnote",note);
     
}
const readNote = id => {
    return httpClient.get(`/readnote/${id}`) ;
}
 
const deleteNote = (id) => {
    return ( 
        httpClient.delete(`/delete/${id}`)
     );
}
 

export default {addnote,getAll,readNote,deleteNote};