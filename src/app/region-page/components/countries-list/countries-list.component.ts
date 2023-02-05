import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '@shared/interfaces/country.interface';
import { RegionPageService } from '@app/region-page/region-page.service';
import { MainService } from '@app/main.service';
import { HEADER_TITLE } from '@shared/constants/header-title.enum';
import { RequestUrlTypeEnum } from '@shared/constants/request-url-type.enum';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesListComponent implements OnInit {
  public regionName: string = '';
  public regionCountriesList$: Observable<Country[]> = new Observable<
    Country[]
  >();

  constructor(
    private activatedRout: ActivatedRoute,
    private regionPageService: RegionPageService,
    private mainService: MainService
  ) {}

  public ngOnInit(): void {
    this.initData();
  }

  private initData(): void {
    this.regionName =
      this.activatedRout.snapshot.params[RequestUrlTypeEnum.REGION];

    this.regionCountriesList$ = this.regionPageService.getRegionCountriesByName(
      this.regionName
    );

    this.mainService.updateHeaderTitle(HEADER_TITLE.COUNTRIES_LIST);
  }
}
