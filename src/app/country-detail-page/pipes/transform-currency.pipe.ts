import { Pipe, PipeTransform } from '@angular/core';
import { CountryCurrencies } from '@shared/interfaces/country.interface';

@Pipe({
  name: 'transformCurrency',
})
export class TransformCurrencyPipe implements PipeTransform {
  public transform(currencyObj: CountryCurrencies): string {
    const countryCurrencyCodeList = Object.keys(currencyObj);
    const currencySymbolList = countryCurrencyCodeList.map(
      (curCode: string) => currencyObj[curCode].symbol
    );

    return currencySymbolList
      .map((cur: string, i: number) => (i ? ' ' + cur : cur))
      .toString();
  }
}
