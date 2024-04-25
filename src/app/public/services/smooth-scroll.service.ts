import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToElement(elementId: string): void {
    const element = this.document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
