import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegionsListCardComponent } from '@app/regions-list/components/regions-list-card/regions-list-card.component';
import { RegionsListComponent } from '@app/regions-list/components/regions-list/regions-list.component';

const routes: Routes = [
  {
    path: '',
    component: RegionsListComponent,
  },
];

@NgModule({
  declarations: [RegionsListComponent, RegionsListCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
})
export class RegionsListModule {}
