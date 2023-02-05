import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoModule } from '@shared/modules/logo/logo.module';
import { BackButtonModule } from '@shared/modules/back-button/back-button.module';
import { HeaderComponent } from '@app/header/components/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, LogoModule, BackButtonModule],
})
export class HeaderModule {}
