import {Rating} from '../../common/rating';
import {MolitioResourceTagDescriptor} from './molitioResourceTagDescriptor';

export interface MolitioResourceTag {
  descriptors: MolitioResourceTagDescriptor[];
  publicRating: Rating;
}
