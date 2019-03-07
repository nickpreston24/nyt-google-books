import axios from 'axios';
// const booksUrl = 'https://www.googleapis.com/auth/books?q=';
const volumesUrl = 'https://www.googleapis.com/books/v1/volumes?q='

export default function search(query) {
    return axios.get(volumesUrl + "intitle+" + query);
    // return axios.get(booksUrl + query);
}