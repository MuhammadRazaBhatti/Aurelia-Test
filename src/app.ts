import { inject } from 'aurelia-dependency-injection';
import { CountryRepository } from 'countryrepository';
import { ErrorHandler } from 'errorhandler';

@inject(CountryRepository)
export class App {
  countries: any;
  countryNameAndCapitalName: string;

  constructor(private countryRepository: CountryRepository) {
    this.countryRepository = countryRepository
  }

  activate() {
    return this.countryRepository.getCountries()
      .then(response => {
        if (response.length > 0) {
          this.countries = response;
        }

      }).catch(response => ErrorHandler.handleError(response));
  }

  showCapitalName(country) {
    this.countryNameAndCapitalName = `Capital of ${country.name} is ${country.capital}`;
  }
  public message = 'Countries';
}
