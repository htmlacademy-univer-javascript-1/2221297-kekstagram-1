import {createUserData} from './data.js';

const PHOTOS = () => Array.from({length: 25}).map((element, index) => element = createUserData(index + 1));(PHOTOS());
