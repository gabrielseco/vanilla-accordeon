// @flow
import { applyClasses } from './../utils';

type AccordionItemType = {
  title: string;
  description: string;
}

type State = {
  active: boolean;
}

export class Item {
  item: AccordionItemType;
  state: State;
  constructor(item: AccordionItemType) {
    this.item = item;
    this.state = {
      active: false,
    };
  }

  activate() {
    this.state.active = true;
  }

  deactivate() {
    this.state.active = false;
  }

  render() {
    const classes = applyClasses({
      'Accordion-title': true,
      'is-active': this.state.active,
    });

    return `
      <dt class="${classes}">${this.item.title}</dt>
      <dd class="Accordion-description">
        <p class="Accordion-text">${this.item.description}</p>
      </dt>
    `;
  }
}
