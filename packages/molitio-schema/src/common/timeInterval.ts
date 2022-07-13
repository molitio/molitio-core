import { Moment } from "moment";

export type TimeInterval = {
  start: Moment;
  stop: Moment;
  constructor(start: Date, stop: Date): TimeInterval;
  intervalLenghtMs(): number;
};
