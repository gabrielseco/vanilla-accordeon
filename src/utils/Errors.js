// @flow
import { Renderer } from './Renderer';

export class Errors {
  renderer: Renderer;
  className: string;

  constructor(renderer: Renderer, className: string) {
    this.renderer = renderer;
    this.className = className;
  }

  renderError(message: string) {
    const error = `<p class="error">${message}</p>`;
    let template = `<h2 class="error-text">${this.className} Errors</h2>`;
    template += error;
    this.renderer.render(template);
  }
}
