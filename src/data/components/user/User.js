import React, { Component } from 'react';

class User extends Component {

    state = {userStatus: this.props.user.status};

    changeStatus = (status) => {
        console.log(status);
        this.setState({userStatus: !this.state.userStatus});
        console.log(this.state.userStatus);
    };

    render() {
        let { id, name, age, status } = this.props.user;
        return (
            <div className="alert alert-info m-3" role="alert">
                {id}. {name}, age: {age}
                <br/> 
                status: {this.state.userStatus.toString()}
                <button type="button" className="btn btn-outline-success d-flex " onClick={() => {return this.changeStatus(status)}}>Change status</button>
            </div>
        );
    }
}

export default User;