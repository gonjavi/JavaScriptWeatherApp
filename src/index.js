import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

document.getElementById('check').onclick = () => {
  const table = document.getElementById('table');
  const titlediv = document.getElementById('titlediv');
  const title = document.createElement('h3');
  const thead = document.createElement('thead');
  const tr1 = document.createElement('tr');
  const th1 = document.createElement('th');
  const th2 = document.createElement('th');
  const th3 = document.createElement('th');
  const tbody = document.createElement('tbody');
  const tr2 = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  title.innerHTML = 'Temperature';
  th1.innerHTML = 'City';
  th2.innerHTML = 'Celsius';
  th3.innerHTML = 'Fahrenheit';
  tr1.appendChild(th1);
  tr1.appendChild(th2);
  tr1.appendChild(th3);
  thead.appendChild(tr1);
  titlediv.appendChild(title);
  table.appendChild(thead);
  return false;
};
