/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'

export default class User extends Component {

    state = {userStatus: this.props.currentUser.status};

    changeStatus = (status) => {
        this.setState({userStatus: !this.state.userStatus});
    };

    render() {

        let { name, age, status } = this.props.currentUser;

        return (

            <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">
                            {age} - {this.state.userStatus.toString()}
                        </p>
                        <button className="btn btn-info" onClick={() => this.changeStatus(status)}>Change status</button>
                    </div>
            </div>        
        );
    };
};