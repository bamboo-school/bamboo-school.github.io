import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bash',
  templateUrl: './bash.component.html',
  styleUrls: ['./bash.component.scss']
})
export class BashComponent {
    @Input('cmd') cmd?: string;
}
