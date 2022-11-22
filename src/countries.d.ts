declare interface CountryName {
  common: string;
  nativeName: string[];
}
declare interface CountryFlag {
  png: string;
}

declare interface Country {
  name: CountryName;
  flags: CountryFlag;
  population: number;
  capital: string[];
  region: string;
  cca3: string;
}

declare interface CountryView {
  name: CountryName;
  nativeNames: string[];
  flags: CountryFlag;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: string[];
  languages: string[];
  borders: string[];
}

declare type Regions = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania" | "All";
