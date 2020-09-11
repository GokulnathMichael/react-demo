import React from 'react';
import axios from 'axios';
import './App.css';
import Modal from './components/modal';


export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true
    }
  }
  componentDidMount() {
    axios
      .get("https://cors-anywhere.herokuapp.com/http://usermainapp.herokuapp.com/getallusers")
      .then((d) => d.data)
      .then((d) => this.setState({ users: d.Content, loading: false}));
  }

  onEdit(id) {
    console.log("Edited");
  }

  onDelete(id) {
    console.log("Deleted");
        // axios
        //   .delete(
        //     "https://jsonplaceholder.typicode.com/users/57"
        //   )
        //   .then((d) => console.log("deleted"));
  }



  render() {
    const { loading, users = [] } = this.state;

    return (
      <div className="App">
        <h1>User Account Maintenance Application</h1>
        <div className="search">
          <input 
              name= "search"
              placeholder='Search' 
              value=''
          />
          <button>+</button>
        </div>
        <table>
          <tr>
            <th>UserName</th>
            <th>Address</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
          {loading ? (
          <tr><td colSpan={"5"}>Loading...</td></tr>
        ) : (
          <>
              {users.map((d) => (
                <tr key={d.id}>
                  <td>{d.username}</td>
                  <td>{d.address}</td>
                  <td>{d.age}</td>
                  <td>{d.phonenumber}</td>
                  <td><button onClick={() => this.onEdit(d)}>Edit</button> | <button onClick={() => this.onDelete(d)}>Delete</button></td>
                </tr>
              ))}
              </>
        )}
        </table>

      </div>
    );
  }
}



class AddForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formValue: {
        username: "",
        address: "",
        age: "",
        phonenumber: "",
      },
    };
  }

  onFormChange(e, name) {
    const {
      target: { value },
    } = e;
    const { formValue } = this.state;
    formValue[name] = value;

    this.setState({
      formValue,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.formValue)
    axios.post(
      "https://jsonplaceholder.typicode.com/users",
      this.state.formValue
    ).then(d => console.log("created"));
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="fields">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" onChange={(e) => this.onFormChange(e, "username")} />
        </div>
        <br />
        <div className="fields">
          <label for="address">Address:</label>
          <input type="text" id="address" name="address" onChange={(e) => this.onFormChange(e, "address")} />
        </div>
        <br />
        <div className="fields">
          <label for="age">Age:</label>
          <input type="text" id="age" name="age" onChange={(e) => this.onFormChange(e, "age")} />
        </div>
        <br />
        <div className="fields">
          <label for="phonenumber">Phone number:</label>
          <input type="text" id="phonenumber" name="phonenumber" onChange={(e) => this.onFormChange(e, "phonenumber")} />
        </div>
        <br />
        <button className="left-btn" type="button">cancel</button>
        <button className="left-btn" type="button">clear</button>
        <button className="right-btn" type="submit">Submit</button>
      </form>
    );
  }
}


const UserAdd = () => (
  <div className="createUser">
    <h1>User Create Form</h1>
    <form>
      <div className="fields">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <br />
      <div className="fields">
        <label for="address">Address:</label>
        <input type="text" id="address" name="address" />
      </div>
      <br />
      <div className="fields">
        <label for="gender">Gender:</label>
        <select id="gender" name="sex">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <br />
      <div className="fields">
        <label for="age">Age:</label>
        <input type="text" id="age" name="age" />
      </div>
      <br />
      <div className="fields">
        <label for="phonenumber">Phone number:</label>
        <input type="text" id="phonenumber" name="phonenumber" />
      </div>
      <br />
      <div className="fields">
        <input className="left-btn" type="button" value="Cancel"></input>
        <input className="left-btn" type="button" value="Clear"></input>
        <input className="right-btn" type="button" value="Create"></input>
      </div>
    </form>
  </div>
  
)


const Popup = () => (

  <div className="popup">
    <h1>Popup</h1>
    <Modal />
  </div>


)


export default App;
