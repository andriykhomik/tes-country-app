import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutMeComponent } from '@shared/modules/information-about-me/about-me/about-me.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  constructor(private dialog: MatDialog) {}

  public openAboutMePoUp(): void {
    this.dialog.open(AboutMeComponent, {
      maxHeight: '90%',
      panelClass: 'info-dialog',
    });
  }
}
