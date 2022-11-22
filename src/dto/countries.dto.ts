class CountriesDto {
  countries: Country[];
  constructor(countries: Country[]) {
    this.countries = countries.map((country: Country) => {
      return {
        cca3: country.cca3,
        name: country.name,
        capital: country.capital,
        region: country.region,
        population: country.population,
        flags: country.flags
      };
    });
    this.countries = this.countries.sort((firstParameter: Country, secondParameter: Country) => {
      return firstParameter.name.common.localeCompare(secondParameter.name.common);
    });
  }
}

export default CountriesDto;
