import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private headerTitleSub$: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  public headerTitle$: Observable<string> = this.headerTitleSub$;

  public updateHeaderTitle(title: string): void {
    this.headerTitleSub$.next(title);
  }
}
