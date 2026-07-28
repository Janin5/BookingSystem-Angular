import { Procedure } from './procedure';
import { Stylist } from './stylist';

export interface SalonBase {
  id: string;
  name: string;
  adress: string;
  phone: string;
}

export interface SalonListItem extends SalonBase {
  procedures: string[];
}

export interface SalonDetails extends SalonBase {
  description: string;
  procedures: Procedure[];
  stylists: Stylist[];
}
