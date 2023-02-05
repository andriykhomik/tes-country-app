import { Inject, Injectable } from '@angular/core';
import { RequestUrlTypeEnum } from '@shared/constants/request-url-type.enum';
import { HttpClient } from '@angular/common/http';
import { concatAll, first, Observable } from 'rxjs';
import { CountryInterface } from '@shared/interfaces/country.interface';

@Injectable()
export class CountryDetailsService {
  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private httpClient: HttpClient
  ) {}

  public getCountriesByName(countryName: string): Observable<CountryInterface> {
    return this.httpClient
      .get<CountryInterface[]>(
        this.baseUrl + '/' + RequestUrlTypeEnum.COUNTRY + '/' + countryName
      )
      .pipe(concatAll(), first());
  }
}
