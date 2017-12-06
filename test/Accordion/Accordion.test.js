import { Accordion, Item } from '../../src';

describe('Accordion class', () => {
  let accordion: Accordion;
  const fakeItems: Item[] = [
    new Item({
      title: 'Section 1',
      description: 'Section 1 Content ...',
    }),
    new Item({
      title: 'Section 2',
      description: 'Section 2 Content ...',
    }),
  ];

  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div><div id="demo"></div>';
    accordion = new Accordion({
      querySelector: '#app',
      items: fakeItems,
      activeIndex: 0,
    });
  });

  it('should call the init event', () => {
    jest.spyOn(accordion.errors, 'renderError');
    accordion.init();
    expect(accordion.errors.renderError).not.toHaveBeenCalled();
  });

  it('should test the toogle function', () => {
    accordion.toggle(1);
    expect(accordion.options.items[0].state.active).toBeFalsy();
    expect(accordion.options.items[1].state.active).toBeTruthy();
  });

  it('should call the init event but render an error', () => {
    const accordionWithError = new Accordion({
      querySelector: '#demo',
      items: fakeItems,
      activeIndex: 3,
    });
    jest.spyOn(accordionWithError.errors, 'renderError');
    accordionWithError.init();
    expect(accordionWithError.errors.renderError).toHaveBeenCalled();
  });
});
