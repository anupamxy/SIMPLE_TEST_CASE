
import React, { useContext, useEffect, useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/NoteContext';
import SearchBar from './SearchBar';
import Noteitem from './NoteItem';



const Notes = (props) => {
  const navigate = useNavigate();
  const context = useContext(noteContext)
  const { notes, getNotes, editNote } = context;
 

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }
    else{
      navigate("/login");;
    }
    // eslint-disable-next-line
  }, [])

  const ref = useRef(null);  
  const refClose = useRef(null);  

  const [note,setNote] = useState({id:"",tittle:"",noteval:"",tag:"",info:"",somenumber:"",});
  const [searchInput, setSearchInput] = useState('');
 


  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id, tittle: currentNote.tittle, noteval: currentNote.noteval , tag : currentNote.tag, info: currentNote.info,somenumber: currentNote.somenumber});
  }

  
  const handleClick =(e)=>{
    editNote(note.id,note.tittle,note.noteval,note.tag,note.info,note.somenumber);
    refClose.current.click();
    props.showAlert("Updated Succesfully","success");

}

const onChange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value})
}
const handleSearch = (searchTerm) => {
  setSearchInput(searchTerm);
};


const filteredNotes = notes.filter((note) =>
  note.username && note.username.toLowerCase().includes(searchInput.toLowerCase())
);


  return (
    <>
  
      <SearchBar handleSearch={handleSearch} />
      
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Note
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Influencer</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="tittle" className="form-label">tittle</label>
                  <input type="text" className="form-control" id="tittle" name='tittle' aria-describedby="emailHelp" value={note.tittle} onChange={onChange} minLength={5} required  />
                </div>
                <div className="mb-3">
                  <label htmlFor="noteval" className="form-label">note</label>
                  <input type="text" className="form-control" id="noteval" name='noteval' value={note.noteval} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="info" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="info" name='info' value={note.info} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="somenumber" className="form-label">Some number/values</label>
                  <input type="text" className="form-control" id="somenumber" name='somenumber' value={note.somenumber} onChange={onChange} minLength={5} required />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref = {refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.eusername.length<5 || note.ephone.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>


      <div className="row my-3">
        <h2 className='px-5 addnote'>Your Influencer</h2>
        <div className="container mx-2 px-5">
        {notes.length===0 && 'No Notes to display'}
        </div>
        {filteredNotes.sort((a,b) => new Date(b.date) - new Date(a.date)).map((note,_id) => {
  return <Noteitem key={_id} updateNote={updateNote}  showAlert={props.showAlert} note={note} />
})}

      </div>

       
      
   
    </>
  )
}

export default Notes
