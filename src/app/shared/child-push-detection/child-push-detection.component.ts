import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {User} from "../../user-state/user";

@Component({
  selector: 'app-child-push-detection',
  templateUrl: './child-push-detection.component.html',
  styleUrls: ['./child-push-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildPushDetectionComponent {
  @Input() user: User;
}
