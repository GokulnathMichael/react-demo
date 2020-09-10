import React from 'react'

class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            getallusers: []
         };
       }

       componentDidMount(){
           const url = "http://usermainapp.herokuapp.com/getallusers";
           fetch(url,{
               method: "GET"
           }).then(response => response.json()).then(getallusers => {
               console.log("getallusers", getallusers)
           })
       }

        render() {
            return (
                <div>
                    
                </div>
            )
        }
    
}

export default UserList
