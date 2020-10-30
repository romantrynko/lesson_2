import React, { Component } from 'react'

export default class User extends Component {
    render() {

    let {id, name, username, email} = this.props.user
        return (
            <div>
                {id} - {name}
            </div>
        )
    }
}
