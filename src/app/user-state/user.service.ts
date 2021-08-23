import {Injectable} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {User} from "./user";
import {
  getUserDefaultWithSubscription,
  getUserPushWithPipe,
  getUserPushWithSubscription
} from "./user.selectors";
import {
  updateNameDefaultSubscription,
  updateNamePushWithPipe,
  updateNamePushWithSubscription
} from "./user.actions";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private store: Store
  ) {
  }

  getUserPushWithSubscription(): Observable<User> {
    return this.store.select(getUserPushWithSubscription)
  }

  getUserPushWithPipe(): Observable<User> {
    return this.store.select(getUserPushWithPipe)
  }

  getUserDefaultWithSubscription(): Observable<User> {
    return this.store.select(getUserDefaultWithSubscription)
  }

  updateNamePushWithSubscription(name: string) {
    this.store.dispatch(updateNamePushWithSubscription({name}))
  }

  updateNamePushWithPipe(name: string) {
    this.store.dispatch(updateNamePushWithPipe({name}))
  }

  updateNameDefaultSubscription(name: string) {
    this.store.dispatch(updateNameDefaultSubscription({name}))
  }
}
