import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { User } from "../../../user-state/user";
import { UserService } from "../../../user-state/user.service";

@Component ({
  selector: 'app-parent-push-pipe',
  templateUrl: './parent-push-pipe.component.html',
  styleUrls: ['./parent-push-pipe.component.scss'],
})
export class ParentPushPipeComponent implements OnInit, OnDestroy {
  readonly destroy$: Subject<any> = new Subject<any> ();

  user$: Observable<User>;

  name = new FormControl ();

  constructor (
    private readonly userService: UserService
  ) {
  }

  ngOnInit () {
    this.user$ = this.userService.getUserPushWithPipe ().pipe (
      takeUntil (this.destroy$)
    )
  }

  updateUser (name: string) {
    this.userService.updateNamePushWithPipe (name)
    this.name.reset ();
  }

  ngOnDestroy () {
    this.destroy$.next ();
    this.destroy$.complete ();
  }
}
