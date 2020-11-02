import React, { Component } from 'react';
import User from '../User/User';
import { UserService } from '../../services/UserService';

export default class Users extends Component {

    userService = new UserService();

    state = {users: []};
    
    async componentDidMount() {
        this.setState({users: await this.userService.getUsers()});   
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(user => {
                        return (
                            <User user={user} key={user.id}/>
                        )
                    })

                }
            </div>
        )
    }
}
