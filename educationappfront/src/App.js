import React from "react";
import './App.css';
import './components/User'
import Users from "./components/educational/Users";

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <Users users={this.state.users} key={this.state.users.id}/>
            </div>
        );
    }


}

export default App;
