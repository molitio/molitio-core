import {Moment} from 'moment';

export interface TimeInterval {
  start: Moment;
  stop: Moment;
  constructor(start: Date, stop: Date);
  intervalLenghtMs(): number;
}
