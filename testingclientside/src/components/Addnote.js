
import React, { useContext, useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom'; 
import noteContext from './context/Notecontext';
import Notes from './Notes';



function AddNote(props) {
  const context = useContext(noteContext);
  const { addNote,getNotes,notes } = context;
  const navigate=useNavigate();
  const [note, setNote] = useState({ username: '', name: '', inemail: '', phone: '',review:' ' });
  const [chartData, setChartData] = useState({ testcaseid: [], testcase: [] ,createdby:[],testcasecount:[],reviewreport:[],dates:[]});

  useEffect(() => {
    // Fetch all notes from the database when the component mounts
    getNotes();
  }, [getNotes]);
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.username, note.name, note.inemail, note.phone,note.review);
    setNote({ username: '', name: '', inemail: '', phone: '',review:'' });
  

   
    
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    console.log(note);
  };

  useEffect(() => {
    // Extract usernames and prices from the fetched notes
    const testcaseid = notes.map((entry) => entry.username);
    const testcase=notes.map((entry)=>entry.name);
    const testcasecount= notes.map((entry) => entry.phone);
    const reviewreport=notes.map((entry)=>entry.review);
    const dates = notes.map((entry) => entry.date);
    const createdby=notes.map((entry)=>entry.inemail);
    setChartData({ testcaseid,testcase,testcasecount,reviewreport,dates,createdby });
  }, [notes]);
  const navigateTolinechart=()=>{
    console.log('testcaseid:', chartData.testcaseid);
  console.log('testcase:', chartData.testcase);
  console.log('testcasecount',chartData.testcasecount);
  console.log('reviewreport',chartData.reviewport);
  console.log('dates',chartData.dates);
  console.log('createdby',chartData.createdby);
    navigate("/linechart", {
      state: {
        testcaseid: chartData.testcaseid,
        testcase: chartData.testcase,
        testcasecount:chartData.testcasecount,
        reviewreport:chartData.reviewreport,
        dates:chartData.dates,
        createdby:chartData.createdby
      }
    });
    

  }
  const navigateToPiechart=()=>{
    console.log('testcaseid:', chartData.testcaseid);
  console.log('testcase:', chartData.testcase);
  console.log('testcasecount',chartData.testcasecount);
  console.log('reviewreport',chartData.reviewport);
  console.log('dates',chartData.dates);
  console.log('createdby',chartData.createdby);
    navigate("/piechart", {
      state: {
        testcaseid: chartData.testcaseid,
        testcase: chartData.testcase,
        testcasecount:chartData.testcasecount,
        reviewreport:chartData.reviewreport,
        dates:chartData.dates,
        createdby:chartData.createdby
      }
    });
    

  }
  return (
    <div className='page'>
    <div className="container my-3 mt-40" >
      <h1>Create Your Test cases</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Testcaseid
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            aria-describedby="emailHelp"
            value={note.username}
            onChange={onChange}
            minLength={2}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            TestCase
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={note.name}
            onChange={onChange}
            minLength={2}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inemail" className="form-label">
            CreatedBy
          </label>
          <input
            type="text"
            className="form-control"
            id="inemail"
            name="inemail"
            value={note.inemail}
            minLength={2}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Testcasecountnumber
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            name="phone"
            value={note.phone}
            minLength={2}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            TestReviewreport
          </label>
          <input
            type="string"
            className="form-control"
            id="review"
            name="review"
            value={note.review}
            minLength={2}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleClick}>
        

          Add Test Case
        </button>
        <button className='button-56' onClick={navigateTolinechart}>Line Chart</button>
        <button className='button-56' onClick={navigateToPiechart}>Pie chart</button>
      </form>
      
     

      
    </div>
    
    </div>
  );
}
export default AddNote