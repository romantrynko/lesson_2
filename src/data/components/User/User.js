import React, { Component } from 'react'

export default class User extends Component {
    render() {

        let { id, name, username, email } = this.props.user
        
        return (
            <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{id}. {name}</h4>
                        <p class="card-text">
                            {username}
                            <br/>
                            email: {email}
                        </p>
                    </div>
            </div>
        )
    }
}
