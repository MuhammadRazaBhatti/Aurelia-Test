import { inject } from 'aurelia-dependency-injection';
import { HttpClient, json } from 'aurelia-fetch-client';
import { Repository } from 'repository';

@inject(HttpClient)
export class CountryRepository extends Repository {


    constructor(httpClient: HttpClient) {
        super(httpClient, '')
    }

    getCountries() {
        return this.get();
    }
}