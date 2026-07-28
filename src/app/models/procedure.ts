import { Stylist } from './stylist';

export interface Procedure {
  id: string;
  salonId: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  stylists?: Stylist[];
}
