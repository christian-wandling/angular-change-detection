import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChildDefaultDetectionComponent} from './shared/child-default-detection/child-default-detection.component';
import {ChildPushDetectionComponent} from './shared/child-push-detection/child-push-detection.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ParentNoStoreComponent} from './scenario1/parent-no-store/parent-no-store.component';
import {ParentDefaultSubscriptionComponent} from './scenario1/solutions/parent-default-subscription/parent-default-subscription.component';
import * as UserReducer from './user-state/user.reducer';
import {ParentPushPipeComponent} from './scenario2/solution/parent-push-pipe/parent-push-pipe.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {ParentPushSubscriptionComponent} from './scenario2/parent-push-subscription/parent-push-subscription.component';
import {ChildPushPipeComponent} from './scenario2/solution/parent-push-pipe/child-push-pipe/child-push-pipe.component';
import {ChildPushSubscriptionComponent} from './scenario2/parent-push-subscription/child-push-subscription/child-push-subscription.component';
import {MatTabsModule} from "@angular/material/tabs";
import {ParentNoMutationComponent} from './scenario1/solutions/parent-no-mutation/parent-no-mutation.component';
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    ChildDefaultDetectionComponent,
    ChildPushDetectionComponent,
    ParentNoStoreComponent,
    ParentDefaultSubscriptionComponent,
    ParentPushPipeComponent,
    ParentPushSubscriptionComponent,
    ChildPushPipeComponent,
    ChildPushSubscriptionComponent,
    ParentNoMutationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({user: UserReducer.reducer}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
