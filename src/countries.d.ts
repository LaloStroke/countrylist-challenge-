declare interface CountryName {
  common: string;
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
}

declare type Regions = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania" | "All";
