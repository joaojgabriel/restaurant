import Spaghetti from './spaghetti-carbonara.jpg';
import Pizza from './margherita-pizza.jpg';
import Beef from './beef-stroganoff.jpg';

export default function Menu() {
  const contentDiv = document.querySelector('#content');

  const headline = document.createElement('h1');
  headline.textContent = 'Menu';

  const menuItems = [
    {
      name: 'Spaghetti Carbonara',
      description: 'Pasta with bacon, eggs, and Parmesan cheese',
      price: 12.99,
      image: {
        source: Spaghetti,
        link: 'https://unsplash.com/@pinarimsi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        photographer: {
          profile: 'https://unsplash.com/photos/QuFm328PV88',
          name: 'Pinar Kucuk',
        },
      },
    },
    {
      name: 'Margherita Pizza',
      description: 'Tomato sauce, fresh mozzarella, and basil',
      price: 10.99,
      image: {
        source: Pizza,
        link: 'https://unsplash.com/@aurel__lens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        photographer: {
          profile: 'https://unsplash.com/photos/x00CzBt4Dfk',
          name: 'Aurélien Lemasson-Théobald',
        },
      },
    },
    {
      name: 'Beef Stroganoff',
      description:
        'Beef and mushrooms in a sour cream sauce, served over egg noodles',
      price: 14.99,
      image: {
        source: Beef,
        link: 'https://unsplash.com/@clouda9?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        photographer: {
          profile: 'https://unsplash.com/photos/OBxF5lHY3zo',
          name: 'Correen',
        },
      },
    },
  ];

  const menuList = document.createElement('ul');
  menuItems.forEach((item) => {
    const menuItem = document.createElement('li');
    const figure = document.createElement('figure');
    const image = new Image();
    image.src = item.image.source;

    const attribution = document.createElement('figcaption');
    const photographer = document.createElement('a');
    photographer.href = item.image.link;
    photographer.textContent = item.image.photographer.name;
    const unsplash = document.createElement('a');
    unsplash.href = item.image.photographer.profile;
    unsplash.textContent = 'Unsplash';
    const photoBy = document.createTextNode('Photo by ');
    attribution.appendChild(photoBy);
    attribution.appendChild(photographer);
    const onText = document.createTextNode(' on ');
    attribution.appendChild(onText);
    attribution.appendChild(unsplash);
    figure.appendChild(image);
    figure.appendChild(attribution);

    const name = document.createElement('h2');
    name.textContent = item.name;
    const description = document.createElement('p');
    description.textContent = item.description;
    const price = document.createElement('p');
    price.textContent = `$${item.price.toFixed(2)}`;
    menuItem.appendChild(figure);
    menuItem.appendChild(name);
    menuItem.appendChild(description);
    menuItem.appendChild(price);
    menuList.appendChild(menuItem);
  });

  contentDiv.appendChild(headline);
  contentDiv.appendChild(menuList);
}
