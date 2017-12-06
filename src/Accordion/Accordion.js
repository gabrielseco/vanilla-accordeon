// @flow
import { Item } from './Item';
import { Errors, Renderer } from './../utils';

type Options = {
  activeIndex: number,
  items: Item[],
  querySelector: string,
}

type Selector = {
  title: string;
}

export class Accordion {
  renderer: Renderer;
  options: Options;
  WHITESPACE: string;
  SPACE: string;
  selectors: Selector;
  errors: Errors;
  constructor(options: Options) {
    this.options = options;
    this.WHITESPACE = '';
    this.SPACE = ' ';
    this.renderer = new Renderer(options.querySelector);
    this.errors = new Errors(this.renderer, this.constructor.name);
    this.selectors = {
      title: this.options.querySelector + this.SPACE + '.Accordion-title',
    };
  }

  init() {
    const { activeIndex, items } = this.options;
    const lengthItems: number = items.length;
    if (activeIndex >= lengthItems) {
      this.errors.renderError(`The activeIndex property is ${activeIndex} 
          should be less than the length of the items which is ${items.length}`);
      return;
    }
    items[activeIndex].activate();
    this.render();
  }

  initEvents() {
    const titles = document.querySelectorAll(this.selectors.title);

    titles.forEach((element, index) => {
      element.addEventListener('click', this.toggle.bind(this, index), false);
    });
  }

  toggle(index: number) {
    const findIndex = this.options.items.findIndex(item => item.state.active);
    this.options.items[findIndex].deactivate();
    this.options.items[index].activate();
    this.render();
  }

  render() {
    const html = this.renderAccordion();
    this.renderer.render(html);
    this.initEvents();
  }

  renderItems() {
    return this.options.items.map(item => item.render()).join(this.WHITESPACE);
  }

  renderAccordion() {
    return `
    <dl class="Accordion">
      ${this.renderItems()}
    </dl>
    `;
  }
}
