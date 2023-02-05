import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainService } from '@app/main.service';
import { HEADER_TITLE } from '@shared/constants/header-title.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly homePageTitle: string = HEADER_TITLE.HOME;

  constructor(public mainService: MainService) {}
}
