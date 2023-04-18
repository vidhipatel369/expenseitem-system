import React from 'react'

export default function Home(props) {
  const submitForm = () => {
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    alert(name +  mobile + email + password);
  }
  return (
    <>

      <div className="container">
        <h1 className="head">Registration</h1>
      <form>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">Name : </label>
          <input type="text" className="form-control" id="name" aria-describedby="emailHelp"  placeholder={props.name}/>
        </div>
        
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile : </label>
          <input type="text" className="form-control" id="mobile" aria-describedby="emailHelp" placeholder={props.mobile}/>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email : </label>
          <input type="text" className="form-control" id="email" aria-describedby="emailHelp" placeholder={props.email} />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password : </label>
          <input type="password" className="form-control" id="password" placeholder={props.password}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="checkme">Check me out</label>
        </div>
        
          <button type="submit" className="btn btn-primary" onClick={submitForm}>Submit</button>

        </form> 
        </div>      
    </>
  )
}
