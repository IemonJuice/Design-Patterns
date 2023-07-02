class XHRRequest {
    xhr = new XMLHttpRequest();

    constructor(url) {
        this.url = url;
    }

    openConnection() {
        this.xhr.open('GET', this.url)
        this.xhr.send();
        this.xhr.responseType = 'json'
    }

    logResponse() {
        this.xhr.onload = () => {
            console.log(this.xhr.response)
        }
    }

}

class FetchRequest {
    fetch;
    constructor(url) {
        this.url = url;
    }

    fetchData() {
        this.fetch = fetch(this.url);
    }
    getResponse(){
        this.fetch.then(r=>console.log(r))
    }
}


// let requestxhr = new XHRRequest('https://jsonplaceholder.typicode.com/posts');
// requestxhr.openConnection();
// requestxhr.logResponse();

// let requestFetch = new FetchRequest('https://jsonplaceholder.typicode.com/posts');
// requestFetch.fetchData();
// requestFetch.getResponse();


class AdapterRequest{
    constructor(url) {
        this.request = new FetchRequest(url);
    }
    openConnection() {
        this.request.fetchData()
    }
    logResponse(){
        this.request.getResponse();
    }
}
let adapter = new AdapterRequest('https://jsonplaceholder.typicode.com/posts');
adapter.openConnection();
adapter.logResponse();
//notice we  have equal interfaces but different response because of difference between request methods