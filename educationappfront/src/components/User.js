import React, {Component} from 'react';

class User extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Age:
                        <input type="text" name="age" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default User;