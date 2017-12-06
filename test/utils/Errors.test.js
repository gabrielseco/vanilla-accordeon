import { Errors, Renderer } from '../../src/utils';

describe('Errors class', () => {
  let renderer: Renderer;
  let errors: Errors;
  const className = 'Accordion';

  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    renderer = new Renderer('#app');
    errors = new Errors(renderer, className);
    jest.spyOn(renderer, 'render');
  });

  it('should render the error and call the renderer to render', () => {
    errors.renderError('error');
    expect(renderer.render).toHaveBeenCalled();
  });
});
