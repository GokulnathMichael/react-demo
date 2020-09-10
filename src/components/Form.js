import React from 'react'

export default class From extends React.Component {
    state = {
        username: '',
        address: '',
        sex: '',
        age: '',
        phonenumber: '',
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e =>{
        e.preventDefault();
        console.log(this.state);
    }
    
    
      
    cancelCourse = () =>{
        this.props.form.resetFields();
    }
    render() {
        return(
            <form>
                <input 
                    name= "username"
                    placeholder='Username' 
                    value={this.state.username}
                    onChange={e => this.change(e)} 
                />
                <br />
                <input 
                    name= "address"
                    placeholder='Address' 
                    value={this.state.address}
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name= "sex"
                    placeholder='Sex' 
                    value={this.state.sex}
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name= "age"
                    placeholder='Age' 
                    value={this.state.age}
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name= "phonenumber"
                    placeholder='Phonenumber' 
                    value={this.state.phonenumber}
                    onChange={e => this.change(e)}
                />
                <br />
                <button name="submit" onClick={e => this.onSubmit(e)}>Add</button>
                <button name="cancelCourse" onClick={this.cancelCourse}>Clear</button>
            </form>
        );
    }
    
}
