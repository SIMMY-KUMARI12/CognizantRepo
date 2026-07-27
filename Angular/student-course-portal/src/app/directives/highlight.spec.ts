import { ElementRef } from '@angular/core';
import { Highlight } from './highlight';

describe('Highlight', () => {
  it('should create', () => {
    const element = document.createElement('div');
    const el = new ElementRef(element);

    const directive = new Highlight(el);

    expect(directive).toBeTruthy();
  });
});