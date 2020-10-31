import React, { Component } from 'react';
import { users } from '../../data';
import User from '../user/User';
import './Users.css';

class Users extends Component {

    

    render() {

        return (
            <div>
                {
                    users.map(user => (<User user={user} key={user.id}/>))
                }
            </div>
        );
    }
}

export default Users;