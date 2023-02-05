import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestUrlTypeEnum } from '@shared/constants/request-url-type.enum';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./regions-list/regions-list.module').then(
        (m) => m.RegionsListModule
      ),
  },
  {
    path: 'region/:' + RequestUrlTypeEnum.REGION,
    loadChildren: () =>
      import('./region-page/region-page.module').then(
        (m) => m.RegionPageModule
      ),
  },
  {
    path: 'country/:' + RequestUrlTypeEnum.COUNTRY,
    loadChildren: () =>
      import('./country-detail-page/country-detail-page.module').then(
        (m) => m.CountryDetailPageModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./regions-list/regions-list.module').then(
        (m) => m.RegionsListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
