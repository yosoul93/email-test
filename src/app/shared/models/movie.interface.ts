export interface EmailList {
  id: string;
  from: string;
  to: string[];
  subject: string;
  body: string;
  date: Date;
  attachment: string[];
}