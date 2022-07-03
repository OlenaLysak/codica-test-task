import {
  API_KEY,
  UNITS,
  CITY_INPUT_OPTIONS_LIMIT,
} from '../constants/constants';

const setUrlByCoord = (lat: number, lon: number): string =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}${UNITS}`;

const setUrlByCity = (name: string): string =>
  `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=${CITY_INPUT_OPTIONS_LIMIT}&appid=${API_KEY}${UNITS}`;

export { setUrlByCoord, setUrlByCity };
