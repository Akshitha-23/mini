import React from 'react'
import '../../bootstrap/dist/css/bootstrap.min.css'
import './HomeAdim.css'
export default function HomeAdim() {
  const callAimlAdmin = () => {
    console.log("aiml");
    window.location.href = '/admin/home/aiml'

  }
  const callDsAdmin = () => {
    console.log("ds");
    window.location.href = '/admin/home/ds'
  }
  const callCsAdmin = () =>{
    console.log("cs");
  }
  return (
    <div className='container text-center adminhome'>
      <div className='row p-5 ms-5  '>
        <div className='col'>
          <div className="card" style={{width: "18rem"}} id="aiml" onClick={callAimlAdmin}>
            <img src="https://www.datanami.com/wp-content/uploads/2019/09/brain_AI_shutterstock_Jozsef-Bagota-300x150.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h4 className="card-text">AI - ML</h4>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card" style={{width: "18rem"}} id="ds" onClick={callDsAdmin}>
            <img src="https://e9i3r2v2.stackpathcdn.com/wp-content/uploads/2022/12/AdobeStock_405526181-1024x512.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h4 className="card-text">DS</h4>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card" style={{width: "18rem"}} id="cs" onClick={callCsAdmin}>
            <img src="https://www.stjohns.edu/sites/default/files/2022-05/istock-1296650655.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h4 className="card-text">CS</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
