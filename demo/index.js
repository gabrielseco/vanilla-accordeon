import { Accordion, Item } from './../src';

require('./../stylesheets/main.scss');
require('./../stylesheets/accordion/main.scss');

const accordion = new Accordion({
  querySelector: '#app',
  items: [
    new Item({
      title: 'FrontEnd Developer',
      description: 'In charge of the JS and CSS of the site...',
    }),
    new Item({
      title: 'Backend Developer',
      description: 'In charge of the Database and all the logic in our business...',
    }),
    new Item({
      title: 'Product Owner',
      description: 'In charge of making the business decisions and transform it in user histories...',
    }),
  ],
  activeIndex: 0,
});

accordion.init();
