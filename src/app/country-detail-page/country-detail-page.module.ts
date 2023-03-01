import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailsPageComponent } from './components/country-details-page/country-details-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsService } from '@app/country-detail-page/country-details.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderModule } from '@shared/modules/loader/loader.module';
import { TransformCurrencyPipe } from './pipes/transform-currency.pipe';

const routes: Routes = [
  {
    path: '',
    component: CountryDetailsPageComponent,
  },
];

@NgModule({
  declarations: [CountryDetailsPageComponent, TransformCurrencyPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    LoaderModule,
  ],
  providers: [CountryDetailsService],
})
export class CountryDetailPageModule {}
