import { Owners } from './owners.interface';

export interface Owner {
  items: Array<Owners>;
  hasNext: boolean;
  remainingRecords: number;
}
