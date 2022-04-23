import React from "react";
import './App.css';
import './components/User'
import UserTable from "./components/UserTable";

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div className="container">
                <UserTable/>
            </div>
        );
    }


}

export default App;
