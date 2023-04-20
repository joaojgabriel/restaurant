import imageFile from './image.jpg';

export default function initialContent() {
  const contentDiv = document.querySelector('#content');

  const headline = document.createElement('h1');
  headline.textContent = `Welcome to Bella's Bistro - Where Exquisite Flavors Meet Impeccable
	Service!`;
  const figure = document.createElement('figure');
  const image = new Image();
  image.src = imageFile;
  const attribution = document.createElement('figcaption');
  const photographer = document.createElement('a');
  photographer.href =
    'https://unsplash.com/es/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
  photographer.textContent = 'Louis Hansel';
  const unsplash = document.createElement('a');
  unsplash.href =
    'https://unsplash.com/photos/u13IpYtZ9I8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
  unsplash.textContent = 'Unsplash';
  const photoBy = document.createTextNode('Photo by ');
  attribution.appendChild(photoBy);
  attribution.appendChild(photographer);
  const onText = document.createTextNode(' on ');
  attribution.appendChild(onText);
  attribution.appendChild(unsplash);
  figure.appendChild(image);
  figure.appendChild(attribution);
  const copy = document.createElement('p');
  copy.textContent = `At Bella's Bistro, we pride ourselves on offering a dining experience
	that combines exquisite flavors with impeccable service. Our expert
	chefs use only the finest ingredients to create dishes that are packed
	with flavor, and our friendly staff is dedicated to providing you with
	an unforgettable dining experience.`;

  contentDiv.appendChild(headline);
  contentDiv.appendChild(figure);
  contentDiv.appendChild(copy);
}
