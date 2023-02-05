import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { FooterModule } from '@app/footer/footer.module';
import { HeaderModule } from '@app/header/header.module';
import { LoaderModule } from '@shared/modules/loader/loader.module';
import { environment } from '@env/*';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    HeaderModule,
    LoaderModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [{ provide: 'BASE_URL', useFactory: () => environment.apiUrl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
