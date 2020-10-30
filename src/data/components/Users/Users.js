import React, { Component } from 'react';
import { ApiService } from '../../services/ApiService';
import User from '../User/User';
import './Users.css';

export default class Users extends Component {

    api = new ApiService();

    state = {users: []};
    
    async componentDidMount() {
        this.setState({users: await this.api.getUsers()});
        
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(user => {
                        return (
                            <User user={user} key="user.id"/>
                        )
                    })

                }
            </div>
        )
    }
}
