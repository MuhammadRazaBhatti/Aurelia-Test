import { inject } from 'aurelia-dependency-injection';
import { HttpClient, json } from 'aurelia-fetch-client';

@inject(HttpClient)
export class Repository {
    protected endPoint: string;
    protected httpClient: HttpClient

    constructor(httpClient: HttpClient, endPoint: string) {
        this.httpClient = httpClient;
        this.endPoint = `https://restcountries.eu/rest/v2/all`;
    }

    getAll() {
        return this.get();
    }

    protected get(param?: any) {
        var url = this.endPoint;
        if (param !== undefined && param !== null && param !== '' && param !== 0)
            url += '\\' + param;

        return this.fetch(url);
    }

    protected fetch(url, options?) {
        return this.httpClient.fetch(url, options)
            .then(response => {
                if (!response)
                    return Promise.reject();

                if (response.json)
                    return response.json();
            });
    }
}