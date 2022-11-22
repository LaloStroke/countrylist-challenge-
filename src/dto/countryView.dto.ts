class CountryViewDto {
  country: CountryView;
  constructor(country: CountryView[]) {
    const countryData = country[0];

    this.country = {
      population: countryData.population,
      name: countryData.name,
      flags: countryData.flags,
      region: countryData.region ? countryData.region : "",
      subregion: countryData.subregion ? countryData.subregion : "",
      capital: countryData.capital ? countryData.capital : [],
      tld: countryData.tld ? countryData.tld : [],
      nativeNames: countryData.name.nativeName
        ? Object.values(countryData.name.nativeName).map((name: any) => name.common)
        : [],
      currencies: countryData.currencies
        ? Object.values(countryData.currencies).map((currency: any) => currency.name)
        : [],
      languages: countryData.languages
        ? Object.values(countryData.languages).map((language: any) => language)
        : [],
      borders: countryData.borders ? countryData.borders : []
    };
  }
}

export default CountryViewDto;
