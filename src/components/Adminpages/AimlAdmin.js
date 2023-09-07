  import React, { useEffect, useState } from 'react';
  import '../../bootstrap/dist/css/bootstrap.min.css';

  const AimlAdmin = () => {
    const [dataAiml, setDataAiml] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [semMarks, setSemMarks] = useState({});
    const [loading,isLosding] = useState(false);
    const [loading2,isLosding2] = useState(false);
    const [loading3,isLosding3] = useState(false);
    const [loading4,isLosding4] = useState(false);
    const [addOrNot , setAddOrNot] = useState(false);
    const [editingSemester, setEditingSemester] = useState({});


    const url = `http://localhost:5000/students/branch/aiml`;
    const sem1url = `http://localhost:5000/sem`;
    const addstudent = `http://localhost:5000/students/add`

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
        });

        if (response.ok) {
          const data = await response.json();
          setDataAiml(data);
        } else {
          console.log('Error');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    const handleMarksChange = (event) => {
      const { name, value } = event.target;
      setSemMarks((prevMarks) => ({
        ...prevMarks,
        [name]: value,
      }));
    };
  

    useEffect(() => {
      fetchData();
    }, []);

    const handleRowClick = (index) => {
      if (selectedRow === index) {
        setSelectedRow(null); 
      } else {
        setSelectedRow(index); 
      }
    };
    const semmarks = async (rollnumber, semester) => {
      try {
        const response = await fetch(`${sem1url}${semester}/${rollnumber}/`, {
          method: 'GET',
        });

        if (response.ok) {
          const marks = await response.json();
          //console.log(data);
          setSemMarks(marks);
          setEditingSemester(marks);
          
        } else {
          console.log('Error');
        }
      } catch (error) {
        console.log('Error:', error);
      }
      console.log(semMarks);
    };


    const toggle = () => {
      isLosding(!loading)
      isLosding2(false)
      isLosding3(false)
      isLosding4(false)
    }

    const toggle2 = () => {
      isLosding(false)
      isLosding2(!loading2)
      isLosding3(false)
      isLosding4(false)
    }
    const toggle3 = () => {
      isLosding(false)
      isLosding2(false)
      isLosding3(!loading3)
      isLosding4(false)
    }
    const toggle4 = () => {
      isLosding(false)
      isLosding2(false)
      isLosding3(false)
      isLosding4(!loading4)
    }
    const renderDropdownItems = (student) => {
      return (
        <div className='dropdown'>
          <div className='dropdown-content'>
            <button onClick={() => {semmarks(student.rollnumber , 1); toggle() }} >sem 1</button>
            <button onClick={() => {semmarks(student.rollnumber , 2); toggle2()}}>sem 2</button>
            <button onClick={() => {semmarks(student.rollnumber , 3); toggle3()}}>sem 3</button>
            <button onClick={() => {semmarks(student.rollnumber , 4); toggle4()}}>sem 4</button>
          </div>
          {loading && <div>
            {renderSem1Marks(student)}
            </div>}
          {loading2 && <div>{renderSem2Marks(student)}</div>}
          {loading3 && <div>{renderSem3Marks(student)}</div>}
          {loading4 && <div>{renderSem4Marks(student)}</div>}
        </div>
      );
    };

  
    const renderSem1Marks = (student) => {
      console.log();
      if (editingSemester !== null) {
        return (
          <div>
            <h6>Edit Semester Marks</h6>
            <form onSubmit={() =>{/*savemarks(student.rollnumber, editingSemester)*/}}>
              {/* Render form fields for editing marks */}
              <div className="form-group">
                <label className="col" htmlFor="Cprogramming">Cprogramming</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.Cprogramming}
                  onChange={handleMarksChange}
                />
                <br></br>
                 <label htmlFor="EngineeringDrawing">EngineeringDrawing</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.EngineeringDrawing}
                  onChange={handleMarksChange}
                />
                <br></br>
                 <label htmlFor="English">English</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.English}
                  onChange={handleMarksChange}
                />
                <br></br>
                  <label htmlFor="M1">M1</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.M1}
                  onChange={handleMarksChange}
                />
                <br></br>
                  <label htmlFor="Physics">Physics</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.Physics}
                  onChange={handleMarksChange}
                />
                <br></br>
              </div>
              {/* Add similar form fields for other subjects */}
              <button type="submit" className="">
                Save Marks
              </button>
            </form>
          </div>
        );
      } else {
        console.log("sj");
        return <div>no marks</div>;
      }
    };

    const renderSem2Marks = (student) => {
      console.log();
      if (editingSemester !== null) {
        return (
          <div>
            <h6>Edit Semester Marks</h6>
            <form onSubmit={() =>{/*savemarks(student.rollnumber, editingSemester)*/}}>
              {/* Render form fields for editing marks */}
              <div >
                <label className="col" htmlFor="Chemistry">Chemistry</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.Chemistry}
                  onChange={handleMarksChange}
                />
               <br></br>
                 <label htmlFor="DataStructures">DataStructures</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.DataStructures}
                  onChange={handleMarksChange}
                />
                <br></br>
                 <label htmlFor="EnvironmentalScience">EnvironmentalScience</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.EnvironmentalScience}
                  onChange={handleMarksChange}
                />
                <br></br>
                  <label htmlFor="M2">M2</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.M2}
                  onChange={handleMarksChange}
                />
                <br></br>
                  <label htmlFor="Python">Python</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.Python}
                  onChange={handleMarksChange}
                />
                <br></br>
              </div>
              {/* Add similar form fields for other subjects */}
              <button type="submit" className="">
                Save Marks
              </button>
            </form>
          </div>
        );
      } else {
        console.log("sj");
        return <div>no marks</div>;
      }
    };

    const renderSem3Marks = (student) => {
      console.log();
      if (editingSemester !== null) {
        return (
          <div>
            <h6>Edit Semester Marks</h6>
            <form onSubmit={() =>{/*savemarks(student.rollnumber, editingSemester)*/}}>
              {/* Render form fields for editing marks */}
              <div className="">
                <label className="col" htmlFor="DLCO">DLCO</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.DLCO}
                  onChange={handleMarksChange}
                />
               <br></br>
                 <label htmlFor="DSGT">DSGT</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.DSGT}
                  onChange={handleMarksChange}
                />
                <br></br>
                 <label htmlFor="MSF">MSF</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.MSF}
                  onChange={handleMarksChange}
                />
                <br></br>
                  <label htmlFor="OOP">OOP</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.OOP}
                  onChange={handleMarksChange}
                />
                <br></br>
                  <label htmlFor="OS">OS</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.OS}
                  onChange={handleMarksChange}
                />
                <br></br>
              </div>
              {/* Add similar form fields for other subjects */}
              <button type="submit" className="">
                Save Marks
              </button>
            </form>
          </div>
        );
      } else {
        console.log("sj");
        return <div>no marks</div>;
      }
    };

    const renderSem4Marks = (student) => {
      console.log();
      if (editingSemester !== null) {
        return (
          <div>
            <h6>Edit Semester Marks</h6>
            <form onSubmit={() =>{/*savemarks(student.rollnumber, editingSemester)*/}}>
              {/* Render form fields for editing marks */}
              <div className="form-group">
                <label className="col" htmlFor="ADSJ">ADSJ</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.ADSJ}
                  onChange={handleMarksChange}
                />
                  <br></br>
                 <label htmlFor="ANN">ANN</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.ANN}
                  onChange={handleMarksChange}
                />
                <br></br>
                 <label htmlFor="CAMC">CAMC</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.CAMC}
                  onChange={handleMarksChange}
                />
                <br></br>
                  <label htmlFor="DAA">DAA</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.DAA}
                  onChange={handleMarksChange}
                />
                <br></br>
                  <label htmlFor="DBMS">DBMS</label>
                <input
                  type="text"
                  className=""
                  id="subject1"
                  name="subject1"
                  value={semMarks.DBMS}
                  onChange={handleMarksChange}
                />
                <br></br>
              </div>
              {/* Add similar form fields for other subjects */}
              <button type="submit" className="">
                Save Marks
              </button>
            </form>
          </div>
        );
      } else {
        console.log("sj");
        return <div>no marks</div>;
      }
    };

    const handleAddStudent = () => {
      setAddOrNot(!addOrNot);
      console.log(addOrNot);
    }
    const [addnewStudent,setAddNewStudent] = useState({
      rollnumber : '',
      name: '',
      degree:'B-Tech',
      year:'',
      branch :'AI & ML',
      section :'',
    });

    const handleAdd = async (event) => {
        event.preventDefault();
        const res = await fetch(addstudent,{
          method : 'POST',
          headers : {
            'Content-Type': 'application/json',
          },
          body : JSON.stringify(addnewStudent),
        });
        if(res.ok)
        {
          console.log("added");
          alert("student added");
        }
        else 
        {
          console.log("not added");
          alert("check student details")
        }
        window.location.href = '/admin/home/aiml'
    }

    const handleAddInput = (event) => {
      const {name,value} = event.target ;
      setAddNewStudent({...addnewStudent , [name]:value});
    }

    const addDataForm = () => {
      console.log("hello");
      return (<div>
        <form onSubmit={handleAdd}>
          <label>Roll Number</label><input type="text" onChange={handleAddInput} value={addnewStudent.rollnumber} name='rollnumber' required placeholder='enter a roll Number'></input>
          <label>name</label><input type="text" required onChange={handleAddInput} value={addnewStudent.name} name='name' placeholder='enter a name'></input>
          <label>section</label><input type="text" required  onChange={handleAddInput} value={addnewStudent.section} name='section' placeholder='enter a section'></input>
          <label>year</label><input type="text" required onChange={handleAddInput} name='year' value={addnewStudent.year} placeholder='enter a year'></input>
          <input type="submit" value = "add"></input>
        </form>
      </div>)
    }
    return (
      <div>
        {dataAiml.length === 0 ? (
          <div>
            <p>Loading Data ...</p>
          </div>
        ) : (
          <div className='container'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th>Roll Number</th>
                  <th>Name</th>
                  <th>Branch</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {dataAiml.map((student, index) => (
                  <React.Fragment key={index}>
                    <tr onClick={() => handleRowClick(index)}>
                      <td>{student.rollnumber}</td>
                      <td>{student.name}</td>
                      <td>{student.branch}</td>
                      <td>{student.year}</td>
                    </tr>
                    {selectedRow === index && (
                      <tr>
                        <td colSpan='4'>{renderDropdownItems(student)}</td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            <button onClick={handleAddStudent}>Add student</button>
            {addOrNot && <div>{addDataForm()}</div>}
          </div>
        )}
      </div>
    );
  };

  export default AimlAdmin;
