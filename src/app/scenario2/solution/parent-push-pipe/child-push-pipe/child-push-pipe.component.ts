import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {User} from "../../../../user-state/user";
import {FormControl} from "@angular/forms";
import {UserService} from "../../../../user-state/user.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-child-push-pipe',
  templateUrl: './child-push-pipe.component.html',
  styleUrls: ['./child-push-pipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildPushPipeComponent implements OnInit, OnDestroy {
  readonly destroy$: Subject<any> = new Subject<any>();

  user$: Observable<User>;

  name = new FormControl('');

  constructor(
    private readonly userService: UserService
  ) {
  }

  ngOnInit() {
    this.user$ = this.userService.getUserPushWithPipe().pipe(
      takeUntil(this.destroy$)
    )
  }

  ngOnDestroy() {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
