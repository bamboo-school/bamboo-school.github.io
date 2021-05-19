import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss']
})
export class SourceComponent {
    @Input('code') code?: string;
    @Input('languages') languages?: string[];
    @Input('file-name') fileName?: string;
}
