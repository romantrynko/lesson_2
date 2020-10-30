import React, { Component } from 'react'

export default class Post extends Component {
    render() {

        let { userId, id, title } = this.props.post;

        return (
            <div class="card m-4 p-3 mb-2 bg-secondary text-white shadow">
            Post:
                <div class="card-body">
                    <h4 class="card-title">{id}. {title}</h4>
                    <p class="card-text">
                        (userId: {userId})
                    </p>
                </div>
            </div>
        )
    }
}
