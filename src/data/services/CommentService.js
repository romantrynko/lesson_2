export class CommentService {
    
    _url_comments = 'https://jsonplaceholder.typicode.com/comments';


    async getComments() {
        return (await fetch(this._url_comments)).json();
    }
}