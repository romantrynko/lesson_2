import React, { Component } from 'react'
import Comment from '../Comment/Comment';
import { CommentService } from '../../services/CommentService';

export default class Comments extends Component {

    commentService = new CommentService();

    state = { comments: []};

    async componentDidMount() {
        this.setState({comments: await this.commentService.getComments()});
    }

    render() {


        return (
            <div>
                {
                    this.state.comments.map(comment => {
                        return (
                            <Comment comment={comment} key={comment.id}/>
                        )
                    })
                }
            </div>
        )
    }
}
