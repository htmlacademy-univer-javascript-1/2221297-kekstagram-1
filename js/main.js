import { createMiniatures } from './miniatures.js';
import { getPhotos } from './data.js';

const data = getPhotos();
createMiniatures(data);
