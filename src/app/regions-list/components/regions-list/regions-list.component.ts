import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MainService } from '@app/main.service';
import { HEADER_TITLE } from '@shared/constants/header-title.enum';
import { RegionsListItemInterface } from '@shared/interfaces/regions-list-item.interface';
import { regionsList } from '@shared/data/regions-list.data';

@Component({
  selector: 'app-regions-list.ts',
  templateUrl: './regions-list.component.html',
  styleUrls: ['./regions-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionsListComponent implements OnInit {
  public regionsList: RegionsListItemInterface[] = regionsList;

  constructor(private mainService: MainService) {}

  public ngOnInit(): void {
    this.mainService.updateHeaderTitle(HEADER_TITLE.HOME);
  }
}
