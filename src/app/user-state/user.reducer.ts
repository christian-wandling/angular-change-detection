import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import {User} from "./user";

export const userFeatureKey = 'user';

export interface State {
  defaultWithSubscription: User;
  pushWithSubscription: User;
  pushWithPipe: User;
}

export const initialState: State = {
  defaultWithSubscription: {
    name: undefined,
  },
  pushWithSubscription: {
    name: undefined,
  },
  pushWithPipe: {
    name: undefined,
  }
};


export const reducer = createReducer(
  initialState,

  on(UserActions.updateNameDefaultSubscription, (state, action) => ({
    ...state, defaultWithSubscription: {
      ...state.defaultWithSubscription, name: action.name
    }
  })),

  on(UserActions.updateNamePushWithSubscription, (state, action) => ({
    ...state, pushWithSubscription: {
      ...state.pushWithSubscription, name: action.name
    }
  })),

  on(UserActions.updateNamePushWithPipe, (state, action) => ({
    ...state, pushWithPipe: {
      ...state.pushWithPipe, name: action.name
    }
  })),
);

