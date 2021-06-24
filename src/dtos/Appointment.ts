export interface Guild {
  id: string;
  name: string;
  icon: string | undefined;
  owner: boolean;
}

export interface Appointment {
  id: string;
  guild: Guild;
  category: string;
  date: string;
  description: string;
}
