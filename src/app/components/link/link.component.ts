import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
    @Input('href') href?: string;
    @Input('icon') icon?: string;
    @Input('text') text?: string;
    @Input('fg') foreground?: string;
    @Input('bg') background?: string;

    navigate() {
      window.open(this.href, '_blank');
    }
}
