import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const getUserDefaultWithSubscription = createSelector(
  selectUserState,
  state => state.defaultWithSubscription
)

export const getUserPushWithPipe = createSelector(
  selectUserState,
  state => state.pushWithPipe
)

export const getUserPushWithSubscription = createSelector(
  selectUserState,
  state => state.pushWithSubscription
)
