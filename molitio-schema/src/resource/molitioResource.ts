import {GeoLocation} from '../common/geoLocation';
import {Rating} from '../common/rating';
import {MolitioResourceTag} from './tag/molitioResourceTag';

export interface MolitioResource {
  name: string;
  description: string;
  publicRating: Rating;
  currentLocation: GeoLocation;
  tags: MolitioResourceTag[];
}


