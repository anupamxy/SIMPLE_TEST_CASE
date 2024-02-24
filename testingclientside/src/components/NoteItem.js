
import React, { useContext,useState} from 'react';
import noteContext from '../context/NoteContext';
import "./Noteitem.css"


 // State to store the search input value
 


const Noteitem = (props) => {

  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
 

  return (
    <div className='gettable'>
   <div className="search-container">
      
    </div>
    <table className="table">
       
      <thead>
        <tr>
          <th>Tittle</th>
          <th>Note</th>
          <th>Tag</th>
          <th>Information</th>
          <th>somenumber</th>
          <th>Edit</th>
          <th>Delete</th>
      
          
        </tr>
      </thead>
      <tbody>
     
        <tr>
          <td>{note.tittle}</td>
          <td>{note.noteval}</td>
          <td>{note.tag}</td>
          <td>{note.info}</td>
          <td>{note.somenumber}</td>
          <td>
          
            <i
              className="fa-solid fa-pen-to-square mx-2"
              onClick={() => {
                updateNote(note);
              }}
            >
              Edit
            </i>
          </td>
          <td>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert('Deleted Successfully', 'success');
              }}
            >
              Delete
            </i>
          </td>
      
        </tr>
        {/* You can add more rows here for each note */}
      </tbody>
    </table>
    </div>
  );
};

export default Noteitem;
