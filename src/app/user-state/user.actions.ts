import {createAction, props} from '@ngrx/store';

export const updateNameDefaultSubscription = createAction(
  '[User] Update first name default with subscription',
  props<{ name: string }>()
);

export const updateNamePushWithSubscription = createAction(
  '[User] Update first name push with subscription',
  props<{ name: string }>()
);

export const updateNamePushWithPipe = createAction(
  '[User] Update first name push with pipe',
  props<{ name: string }>()
);




