import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CountryCurrencies,
  CountryInterface,
} from '@shared/interfaces/country.interface';
import { ActivatedRoute } from '@angular/router';
import { CountryDetailsService } from '@app/country-detail-page/country-details.service';
import { RequestUrlTypeEnum } from '@shared/constants/request-url-type.enum';
import { HEADER_TITLE } from '@shared/constants/header-title.enum';
import { MainService } from '@app/main.service';

@Component({
  selector: 'app-country-details-page',
  templateUrl: './country-details-page.component.html',
  styleUrls: ['./country-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryDetailsPageComponent implements OnInit {
  public countryName: string = '';
  public countryDetails$: Observable<CountryInterface> =
    new Observable<CountryInterface>();

  constructor(
    private activatedRout: ActivatedRoute,
    private countryDetailsService: CountryDetailsService,
    private mainService: MainService
  ) {}

  public ngOnInit(): void {
    this.initData();
  }

  public transformCurrency(currencyObj: CountryCurrencies): string {
    const countryCurrencyCodeList = Object.keys(currencyObj);
    const currencySymbolList = countryCurrencyCodeList.map(
      (curCode: string) => currencyObj[curCode].symbol
    );

    return currencySymbolList
      .map((cur: string, i: number) => (i ? ' ' + cur : cur))
      .toString();
  }

  private initData(): void {
    this.countryName =
      this.activatedRout.snapshot.params[RequestUrlTypeEnum.COUNTRY];

    this.countryDetails$ = this.countryDetailsService.getCountriesByName(
      this.countryName
    );

    this.mainService.updateHeaderTitle(HEADER_TITLE.COUNTRIES_DETAILS);
  }
}
