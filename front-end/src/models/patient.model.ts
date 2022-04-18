import {PatientStat} from "./stat.model";

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  pathologie: string;
  age: number;
  stats: PatientStat;
}
