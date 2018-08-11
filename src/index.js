import './style.css';

function component() {
  let element = document.createElement('div');

  element.innerHtml = "Hello World";
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());
