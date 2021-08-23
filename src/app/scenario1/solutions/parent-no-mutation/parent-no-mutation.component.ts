import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { User } from "../../../user-state/user";

@Component ({
  selector: 'app-parent-no-mutation',
  templateUrl: './parent-no-mutation.component.html',
  styleUrls: ['./parent-no-mutation.component.scss']
})
export class ParentNoMutationComponent {
  user: User = {
    name: undefined,
  }

  name = new FormControl ();

  updateUser (name: string) {
    this.user = {
      ...this.user,
      name: name
    }
    this.name.reset ();
  }
}
