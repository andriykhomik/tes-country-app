import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from '@shared/modules/back-button/back-button/back-button.component';

@NgModule({
  declarations: [BackButtonComponent],
  exports: [BackButtonComponent],
  imports: [CommonModule],
})
export class BackButtonModule {}
