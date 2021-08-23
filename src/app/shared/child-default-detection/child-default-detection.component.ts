import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../user-state/user";

@Component({
  selector: 'app-child-default-detection',
  templateUrl: './child-default-detection.component.html',
  styleUrls: ['./child-default-detection.component.scss']
})
export class ChildDefaultDetectionComponent {
  @Input() user: User;
}
