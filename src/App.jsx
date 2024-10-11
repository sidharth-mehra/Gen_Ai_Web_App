import React from 'react'
import "./App.css"
const App = () => {
  return (
    <div className="App">
      <h1>Gen Ai Application</h1>

      <div className='form-container'>
        <form className='Query'>
          <label>Enter Query</label>
          <input className='query-input' type="text" placeholder="Enter your query"/>
          <label>Enter FirstName</label>
          <input className='query-input' type="text" placeholder="Enter FirstName"/>
          <label>Enter LastName</label>
          <input className='query-input' type="text" placeholder="Enter LastName"/>
        </form>
      </div>
    </div>
  )
}

export default App;
