import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RegionsListItemInterface } from '@shared/interfaces/regions-list-item.interface';

@Component({
  selector: 'app-regions-list-card',
  templateUrl: './regions-list-card.component.html',
  styleUrls: ['./regions-list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionsListCardComponent {
  @Input() public region!: RegionsListItemInterface;
}
