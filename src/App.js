
import './App.css';
import NotesList from './components/NotesList';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import AddNote from './components/AddNote';
import NoteDetail from './components/NoteDetail';
function App() {
  return (
<BrowserRouter>

<div>
    <Nav />
  <div>
<Routes>
    <Route exact path="/" element={<NotesList/>} />
    <Route  exact path="/addnote" element={<AddNote/>} />
    <Route  exact path="/notedetail/:id" element={<NoteDetail/>} />
    <Route  path="*" element={<NotFound/>} />
  </Routes>

  </div>

</div>
</BrowserRouter>
  );
}

export default App;
