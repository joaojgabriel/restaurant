export default function Contact() {
  const contentDiv = document.querySelector('#content');

  const headline = document.createElement('h1');
  headline.textContent = 'Contact Us';

  const address = document.createElement('address');
  const addressLine1 = document.createElement('span');
  addressLine1.textContent = '123 Main St';
  const br1 = document.createElement('br');
  const addressLine2 = document.createElement('span');
  addressLine2.textContent = 'Anytown, USA 12345';
  const br2 = document.createElement('br');
  const phoneNumber = document.createElement('a');
  phoneNumber.href = 'tel:+15555551234';
  phoneNumber.textContent = '(555) 555-1234';
  const br3 = document.createElement('br');
  const email = document.createElement('a');
  email.href = 'mailto:info@bistro.com';
  email.textContent = 'info@bistro.com';

  address.appendChild(addressLine1);
  address.appendChild(br1);
  address.appendChild(addressLine2);
  address.appendChild(br2);
  address.appendChild(document.createTextNode('Phone: '));
  address.appendChild(phoneNumber);
  address.appendChild(br3);
  address.appendChild(document.createTextNode('Email: '));
  address.appendChild(email);

  contentDiv.appendChild(headline);
  contentDiv.appendChild(address);
}
