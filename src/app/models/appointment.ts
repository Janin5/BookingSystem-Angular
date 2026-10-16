export enum Status {
  Pending = 0,
  Confirmed = 1,
  Cancelled = 2,
}

export interface Appointment {
  id: string;
  procedureId: string;
  procedureName: string;
  stylistId: string;
  stylistName: string;
  appointmentDate: string;
  status: Status.Confirmed;
}

export interface CreateAppointment {
  procedureId: string;
  stylistId: string;
  appointmentDate: string;
}
