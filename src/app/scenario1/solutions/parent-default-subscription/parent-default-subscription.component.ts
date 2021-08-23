import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../../user-state/user";
import {FormControl} from "@angular/forms";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {UserService} from "../../../user-state/user.service";

@Component({
  selector: 'app-parent-default-subscription',
  templateUrl: './parent-default-subscription.component.html',
  styleUrls: ['./parent-default-subscription.component.scss']
})
export class ParentDefaultSubscriptionComponent implements OnInit, OnDestroy {
  readonly destroy$: Subject<any> = new Subject<any>();

  user: User;

  name = new FormControl();

  constructor(
    private readonly userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getUserDefaultWithSubscription().pipe(
      takeUntil(this.destroy$)
    ).subscribe(user => this.user = user)
  }

  updateUser(name: string) {
    this.userService.updateNameDefaultSubscription(name)
    this.name.reset();
  }

  ngOnDestroy() {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
