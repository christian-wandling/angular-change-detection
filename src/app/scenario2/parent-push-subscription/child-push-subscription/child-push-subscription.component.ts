import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {User} from "../../../user-state/user";
import {FormControl} from "@angular/forms";
import {UserService} from "../../../user-state/user.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-child-push-subscription',
  templateUrl: './child-push-subscription.component.html',
  styleUrls: ['./child-push-subscription.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildPushSubscriptionComponent implements OnInit, OnDestroy {
  readonly destroy$: Subject<any> = new Subject<any>();

  user: User;

  name = new FormControl('');

  constructor(
    private readonly userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getUserPushWithSubscription().pipe(
      takeUntil(this.destroy$)
    ).subscribe(user => this.user = user)
  }

  updateUser(name: string) {
    this.userService.updateNamePushWithSubscription(name)
  }

  ngOnDestroy() {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
