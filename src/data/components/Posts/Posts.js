import React, { Component } from 'react'
import { ApiService } from '../../services/ApiService';
import Post from '../Post/Post';

export default class Posts extends Component {

    apiPosts = new ApiService();

    state = {posts: []};

    async componentDidMount() {
        this.setState({posts: await this.apiPosts.getPosts()});
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
