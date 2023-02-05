export interface CountryInterface {
  altSpellings: string[];
  area: number;
  capital: string[];
  capitalInfo: CapitalInfoInterface;
  car: CountryCarInfoInterface;
  cca2: string;
  cca3: string;
  ccn3: string;
  coatOfArms: {};
  continents: string[];
  currencies: CountryCurrencies;
  demonyms: CountryDemonyms;
  flag: string;
  flags: CountryFlagsImagesPath;
  idd: CountryIDD;
  independent: boolean;
  landlocked: boolean;
  languages: CountryLanguages;
  latlng: number[];
  maps: CountryMaps;
  name: CountryName;
  population: number;
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: CountryTranslations;
  unMember: boolean;
}

export interface CapitalInfoInterface {
  latlng: number[];
}

export interface CountryCarInfoInterface {
  signs: string[];
  side: string;
}

export interface CountryCurrencies {
  [key: string]: { name: string; symbol: string };
}

export interface CountryDemonyms {
  [key: string]: { f: string; m: string };
}

export interface CountryFlagsImagesPath {
  png: string;
  svg: string;
  alt?: string;
}

export interface CountryIDD {
  root: string;
  suffixes: string[];
}

export interface CountryLanguages {
  [key: string]: string;
}

export interface CountryMaps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface CountryName {
  common: string;
  official: string;
  nativeName: Name;
}

export interface CountryTranslations {
  [key: string]: Name;
}

export interface Name {
  [key: string]: {
    common: string;
    official: string;
  };
}

export interface Country {
  name: CountryName;
  flags: CountryFlagsImagesPath;
}
