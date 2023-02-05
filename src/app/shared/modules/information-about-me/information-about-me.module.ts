import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from '@shared/modules/information-about-me/about-me/about-me.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [AboutMeComponent],
})
export class InformationAboutMeModule {}
