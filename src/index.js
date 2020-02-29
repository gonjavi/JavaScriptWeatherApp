import 'bootstrap/dist/css/bootstrap.min.css';

const notice = document.getElementById('notice');

async function getTemperature(city) {
  const apiKey = process.env.API_KEY;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, { mode: 'cors' });
  const weatherInfo = await response.json();
  const object = [];
  object.push(weatherInfo.name);
  object.push(Math.floor(weatherInfo.main.temp - (273.15)));
  object.push(Math.floor(((weatherInfo.main.temp - (273.15)) * (1.8)) + 32));
  return object;
}


document.getElementById('check').onclick = () => {
  const city = document.getElementById('city').value;
  let name;
  let temp1;
  let temp2;
  let ok = true;
  if (city === '') {
    ok = false;
  }
  if (ok === false) {
    notice.innerHTML = 'Please enter the city name:\n';
    return ok;
  }
  const titlediv = document.getElementById('titlediv');
  const title = document.createElement('h3');
  title.innerHTML = 'Temperature';
  if (titlediv.hasChildNodes()) {
    titlediv.removeChild(titlediv.childNodes[0]);
  }
  titlediv.appendChild(title);

  const object = getTemperature(city);
  object.then((result) => {
    // destructuring
    [name, temp1, temp2] = result;
    document.getElementById('one').innerHTML = `${name}`;
    document.getElementById('two').innerHTML = `${temp1}`;
    document.getElementById('three').innerHTML = `${temp2}`;
  })
    .catch(() => {
      notice.innerHTML = 'Please check the spelling of the city:\n';
      setTimeout(() => {
        document.location.reload();
      }, 3000);
    });

  return false;
};
