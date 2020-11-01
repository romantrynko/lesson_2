export class ApiService {
    _url = 'https://jsonplaceholder.typicode.com/users';

    async getAllUsers() {
        // let users = await fetch(this._url);
        // let result = users.json();
        // return result;

        return (await fetch(this._url)).json();
    }

    async getUserById(id) {
        return (await fetch(`${this._url}/${id}`)).json();
    }
}