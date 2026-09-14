export enum Status {
  Pending = 0,
  Confirmed = 1,
  Cancelled = 2,
}

export interface Appointment {
  id: string;
  salonId: string;
  status: Status;
  customerId: string;
  procedureId: string;
  stylistId: string;
  appointmentDate: string;
}
