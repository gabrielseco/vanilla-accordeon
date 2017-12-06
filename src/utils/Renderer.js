// @flow

export class Renderer {
  node: HTMLElement | null;

  constructor(querySelector: string) {
    this.node = document.querySelector(querySelector);
  }

  render(html: string) {
    if (this.node !== null) {
      this.node.innerHTML = html;
    }
  }
}
