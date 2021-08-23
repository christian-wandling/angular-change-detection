import {Component} from '@angular/core';
import {User} from "../../user-state/user";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-parent-no-store',
  templateUrl: './parent-no-store.component.html',
  styleUrls: ['./parent-no-store.component.scss']
})
export class ParentNoStoreComponent{

  user: User = {
    name: undefined,
  }

  name = new FormControl();

  updateUser(name: string) {
    this.user.name = name;
    this.name.reset();
  }
}
