import React, { Component } from 'react'
import Post from '../Post/Post';
import { PostService } from '../../services/PostService';

export default class Posts extends Component {

    postService = new PostService();

    state = {posts: []};

    async componentDidMount() {
        this.setState({posts: await this.postService.getPosts()});
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post => {
                        return (
                            <Post post={post} key={post.id}/>
                        )
                    })
                }
            </div>
        )
    }
}
