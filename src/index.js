import 'bootstrap/dist/css/bootstrap.min.css';

const notice = document.getElementById('notice');

async function getTemperature(city) {
  const apiKey = process.env.API_KEY;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, { mode: 'cors' });
  const weatherInfo = await response.json();
  if (weatherInfo.name === undefined) {
    notice.innerHTML = 'Please check the spelling of the city:\n';
    setTimeout(() => {
      document.location.reload();
    }, 4000);
  }
  document.getElementById('one').innerHTML = `${weatherInfo.name}`;
  document.getElementById('two').innerHTML = `${Math.floor(weatherInfo.main.temp - (273.15))}`;
  document.getElementById('three').innerHTML = `${Math.floor(((weatherInfo.main.temp - (273.15)) * (1.8)) + 32)}`;
  return false;
}

document.getElementById('check').onclick = () => {
  const city = document.getElementById('city').value;
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

  getTemperature(city);

  return false;
};
