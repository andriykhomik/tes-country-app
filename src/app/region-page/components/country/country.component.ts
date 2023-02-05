import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '@shared/interfaces/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryComponent {
  @Input() public country!: Country;
}
