import Initial from './Initial';
import Menu from './Menu';
import Contact from './Contact';

export default function Nav() {
  const nav = document.createElement('nav');
  const content = document.querySelector('#content');
  document.body.insertBefore(nav, content);

  const clearContent = () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  };

  const renderPage = (page) => {
    switch (page) {
      case 'menu':
        Menu();
        break;
      case 'contact':
        Contact();
        break;
      default:
        Initial();
        break;
    }
  };

  const initial = document.createElement('button');
  initial.textContent = 'Home';
  nav.appendChild(initial);
  initial.addEventListener('click', () => {
    clearContent();
    renderPage();
  });

  const menu = document.createElement('button');
  menu.textContent = 'Menu';
  nav.appendChild(menu);
  menu.addEventListener('click', () => {
    clearContent();
    renderPage('menu');
  });

  const contact = document.createElement('button');
  contact.textContent = 'Contact';
  nav.appendChild(contact);
  contact.addEventListener('click', () => {
    clearContent();
    renderPage('contact');
  });
}
