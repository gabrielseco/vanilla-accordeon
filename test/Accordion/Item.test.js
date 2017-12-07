import { Item } from './../../src';

describe('Item class', () => {
  let instance: Item;
  const title = 'Section 1';
  const description = 'Section content 1';
  beforeEach(() => {
    instance = new Item({
      title,
      description,
    });
  });
  it('should create an item object', () => {
    expect(instance.item.title).toBe(title);
    expect(instance.item.description).toBe(description);
    expect(instance.state.active).toBeFalsy();
  });

  it('should activate the item', () => {
    expect(instance.state.active).toBeFalsy();
    instance.activate();
    expect(instance.state.active).toBeTruthy();
  });

  it('should deactivate the item', () => {
    expect(instance.state.active).toBeFalsy();
    instance.activate();
    expect(instance.state.active).toBeTruthy();
    instance.deactivate();
    expect(instance.state.active).toBeFalsy();
  });

  it('should render the item without active class', () => {
    const html = instance.render();
    expect(html).toBe(`
      <dt class="Accordion-title">${title}</dt>
      <dd class="Accordion-description">
        <p class="Accordion-text">${description}</p>
      </dd>
      <dd class="Accordion-separator" aria-hidden="true"></dd>
    `);
  });

  it('should render the item without active class', () => {
    instance.activate();
    const html = instance.render();
    expect(html).toBe(`
      <dt class="Accordion-title is-active">${title}</dt>
      <dd class="Accordion-description">
        <p class="Accordion-text">${description}</p>
      </dd>
      <dd class="Accordion-separator" aria-hidden="true"></dd>
    `);
  });
});

