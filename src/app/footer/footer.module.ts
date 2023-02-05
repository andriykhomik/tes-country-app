import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@app/footer/components/footer/footer.component';
import { InformationAboutMeModule } from '@shared/modules/information-about-me/information-about-me.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, InformationAboutMeModule],
  exports: [FooterComponent],
})
export class FooterModule {}
