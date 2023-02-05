import { ChangeDetectionStrategy, Component } from '@angular/core';
import { aboutMe } from '@shared/data/about-me.data';
import { PersonInformation } from '@shared/interfaces/person-information.interface';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {
  public readonly informationAboutMe: PersonInformation = aboutMe;
}
