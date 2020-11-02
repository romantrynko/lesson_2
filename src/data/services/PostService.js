export class PostService {
    
    _url_posts = 'https://jsonplaceholder.typicode.com/posts';
    
    async getPosts() {
        return (await fetch(this._url_posts)).json();
    }

}