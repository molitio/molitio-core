import {ResourceValet} from './resourceValet';
import {Human} from '../human/human';
import {TimeInterval} from '../common/timeInterval';

export interface TransitionResource {
  contributor: Human;
  desiredBy: Human;
  dateCreated: Date;
  dateCompleted: Date;
  transitionTimes: TimeInterval[];
  resourceValet: ResourceValet;
}
