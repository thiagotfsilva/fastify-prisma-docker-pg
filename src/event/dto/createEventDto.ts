export class CreateEvent {
  name: string;
  description: string;
  city: string;
  state: string;
  start_date: Date;
  end_date: Date;
}

export class EventResponse extends CreateEvent {
  id: string;
}
