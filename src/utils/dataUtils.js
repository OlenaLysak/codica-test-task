import { API_KEY, UNITS } from '../constants/constants';

const setUrl = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}${UNITS}`;

export { setUrl };
