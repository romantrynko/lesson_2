export class ApiService {
    _url = 'https://jsonplaceholder.typicode.com/users';
    _url_posts = 'https://jsonplaceholder.typicode.com/posts';
    _url_comments = 'https://jsonplaceholder.typicode.com/comments';

    
    async getUsers() {
        // let users = (await fetch(this._url)).json();
        // let result = users.json()
        // return result;
        return (await fetch(this._url)).json();
    }
    
    // async getUserById(id) {
    //     return (await fetch(`${this._url}/${id}`)).json();
    // }
    
    async getPosts() {
        return (await fetch(this._url_posts)).json();
    }

    async getComments() {
        return (await fetch(this._url_comments)).json();
    }
}