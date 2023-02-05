import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './components/country/country.component';
import { LoaderModule } from '@shared/modules/loader/loader.module';
import { CountriesListComponent } from '@app/region-page/components/countries-list/countries-list.component';
import { RegionPageService } from '@app/region-page/region-page.service';

const routes: Routes = [
  {
    path: '',
    component: CountriesListComponent,
  },
];

@NgModule({
  declarations: [CountriesListComponent, CountryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    LoaderModule,
  ],
  providers: [RegionPageService],
})
export class RegionPageModule {}
