import BaseAPI from "./api";

export default class BackendAPI extends BaseAPI {
    getNews() {
        return this.get('/news/');
    }

    getArticle(id) {
        return this.get(`/news/${id}/`);
    }

    getPictures() {
        return this.get('/pictures/');
    }

    getAbout() {
        return this.getArticle('about');
    }

    getContacts() {
        return this.getArticle('contacts');
    }
}
