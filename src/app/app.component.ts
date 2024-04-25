
import { Component } from '@angular/core';
import { SmoothScrollService } from './public/services/smooth-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgroGes';
  options = {};

  constructor(private smoothScrollService: SmoothScrollService) {}

  onAnchorClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.tagName.toLowerCase() === 'a') {
      event.preventDefault();
      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        this.smoothScrollService.scrollToElement(href.slice(1));
      }
    }
  }
}
