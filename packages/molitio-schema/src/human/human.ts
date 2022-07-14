import {ResourceValet} from '../resource/resourceValet';
import {Rating} from '../common/rating';
import {PublicInfo} from './publicInfo';

export interface Human {
  name: string;
  publicRating: Rating;
  pulicInfo: PublicInfo;
  resourceValet: ResourceValet;
}
