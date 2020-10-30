import React, { Component } from 'react'

export default class Post extends Component {
    render() {

        let { userId, id, title } = this.props.post

        return (
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{id}. {title}</h4>
                    <p class="card-text">
                        user: {userId}
                    </p>
                </div>
            </div>
        )
    }
}
