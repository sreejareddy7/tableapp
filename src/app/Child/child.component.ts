import { Component , Input } from '@angular/core';

@Component({
  selector: 'child-root',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() rval:number;
}
