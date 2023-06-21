export default class BaseAPI {
    constructor(host=null) {
        this.host = host || 'http://localhost:8000';
    }

    get(path) {
        return fetch(this.host + path)
            .then(response => response.json());
    }
}
