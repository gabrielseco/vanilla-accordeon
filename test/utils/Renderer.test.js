import { Renderer } from './../../src/utils';

describe('Renderer class', () => {
  let renderer: Renderer;
  let nullRenderer: Renderer;
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    renderer = new Renderer('#app');
    nullRenderer = new Renderer('#null');
  });
  it('should instantiate the render class', () => {
    expect(renderer.node instanceof HTMLElement).toBeTruthy();
  });

  it('should have the node null if the renderer does not found the selector', () => {
    expect(nullRenderer.node).toBeNull();
  });

  it('should render html in the querySelector', () => {
    const template = '<p>template</p>';
    renderer.render(template);
    const appNode = document.querySelector('#app');
    expect(appNode.innerHTML).toBe(template);
  });

  it('should not render html in the querySelector', () => {
    const template = '<p>template</p>';
    nullRenderer.render(template);
    const appNode = document.querySelector('#demo');
    expect(appNode).toBeNull();
  });
});
