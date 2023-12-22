import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent {
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  side = 'left';

  entries = [
    {
      header: 'header',
      content: 'content',
    },
  ];

  onHeaderClick(event: Event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event: Event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

}
