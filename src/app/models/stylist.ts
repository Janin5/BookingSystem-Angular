import { Procedure } from './procedure';
export interface Stylist {
  id: string;
  name: string;
  description: string;
  procedures: Procedure[];
}
