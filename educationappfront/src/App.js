import React from "react";
import './App.css';
import './components/User'
import Users from "./components/educational/Users";

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            users : [
                {
                    id : 1,
                    name : "Mustafa Ali",
                    salary : "2600",
                    department : "Dağıtım"
                },
                {
                    id : 2,
                    name : "Muhammet Girgin",
                    salary : "9000",
                    department : "Perakende"
                },
                {
                    id : 3,
                    name : "Emre Polat",
                    salary : "5000",
                    department : "Satış"
                },
                {
                    id : 4,
                    name : "Lale Yormaz",
                    salary : "6500",
                    department : "İnsan Kaynakları"
                }
            ]
        }
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
