import React, { Component } from 'react'
import { users } from '../../data/data'
import User from '../user/User'
import './Users.css'

export default class Users extends Component {
    render() {
        // eslint-disable-next-line no-unused-expressions
        users;


        return (
            <div>
                {
                    users.map((user, index) => (<User currentUser={user} key={index}/>))
                }
            </div>
        )
    }
}
