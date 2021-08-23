import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {User} from "../../user-state/user";
import {FormControl} from "@angular/forms";
import {takeUntil} from "rxjs/operators";
import {UserService} from "../../user-state/user.service";

@Component({
  selector: 'app-parent-push-subscription',
  templateUrl: './parent-push-subscription.component.html',
  styleUrls: ['./parent-push-subscription.component.scss'],
})
export class ParentPushSubscriptionComponent implements OnInit, OnDestroy {
  readonly destroy$: Subject<any> = new Subject<any>();

  user: User;

  name = new FormControl();

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
    this.name.reset();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
