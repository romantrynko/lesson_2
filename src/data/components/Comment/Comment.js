import React, { Component } from 'react'

export default class Comment extends Component {
    render() {

        let { postId, id, name, body } = this.props.comment;

        return (
            <div class="card m-4 p-3 mb-2 bg-light text-dark shadow">
            Comment:
                <div class="card-body">
                    <h4 class="card-title">{id}. {name} (postId: {postId})</h4>
                    <p class="card-text">
                        {body}
                    </p>
                </div>
            </div>
        )
    }
}
