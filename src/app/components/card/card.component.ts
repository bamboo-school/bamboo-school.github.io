import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input('color') color?: string;
    @Input('text') text?: string;
    @Input('header') header?: string;
    @Input('link') link?: any[];
}
