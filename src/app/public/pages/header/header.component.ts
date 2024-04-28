import { Component } from '@angular/core';
import {SmoothScrollService} from "../../services/smooth-scroll.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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
