import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      val1: '',
      val2: '',
      val3: 'M'
    }
  }

  handleChangeFirstName = (e) => {
    this.setState({ val1: e.target.value })
  }

  handleChangeSecondName = (e) => {
    this.setState({ val2: e.target.value })
  }

  handleChangeGender = (e) => {
    this.setState({ val3: e.target.value })
  }

  handleSubmit = (e) => {
    const { val1, val2, val3 } = this.state;
    const finalObj = {};
    finalObj.fn = val1;
    finalObj.ln = val2;
    finalObj.gen = val3;
    alert("Value " + JSON.stringify(finalObj));
    e.preventDefault();
  }

  render() {
    const { val1, val2, val3 } = this.state;
    return (
      <div className="App" >
        <form onSubmit={this.handleSubmit}>
          <br />
          <label style={{margin:"5px"}} value="First Name">First Name</label>
          <input type="text" value={val1} onChange={this.handleChangeFirstName} />
          <br />  <br />
          <label style={{margin:"5px"}} value="Last Name">Last Name</label>
          <input type="text" value={val2} onChange={this.handleChangeSecondName} />
          <br />  <br />
          <label style={{margin:"5px"}} value="Gender">Gender</label>
          <select value={val3} onChange={this.handleChangeGender}>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
          <br />  <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default App;
