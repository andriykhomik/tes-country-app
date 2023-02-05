import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, Observable, toArray } from 'rxjs';
import { RequestUrlTypeEnum } from '@shared/constants/request-url-type.enum';
import {
  Country,
  CountryInterface,
} from '@shared/interfaces/country.interface';

@Injectable()
export class RegionPageService {
  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private httpClient: HttpClient
  ) {}

  public getRegionCountriesByName(regionName: string): Observable<Country[]> {
    return this.httpClient
      .get<CountryInterface[]>(
        this.baseUrl + '/' + RequestUrlTypeEnum.REGION + '/' + regionName
      )
      .pipe(
        mergeMap(
          (regionCountriesData: CountryInterface[]) => regionCountriesData
        ),
        map((regionCountry: CountryInterface) => {
          return {
            name: regionCountry.name,
            flags: regionCountry.flags,
          };
        }),
        toArray()
      );
  }
}
