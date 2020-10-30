import React, { Component } from 'react'
import { ApiService } from '../../services/ApiService'
import Comment from '../Comment/Comment';

export default class Comments extends Component {

    apiComments = new ApiService();

    state = { comments: []};

    async componentDidMount() {
        this.setState({comments: await this.apiComments.getComments()});
    }

    render() {


        return (
            <div>
                {
                    this.state.comments.map(comment => {
                        return (
                            <Comment comment={comment} key="comment.id"/>
                        )
                    })
                }
            </div>
        )
    }
}
