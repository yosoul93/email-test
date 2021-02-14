import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EmailListFakeDb } from './email-list';

export class FakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Email List Data
      'email-list-data' : EmailListFakeDb.data
    };
  }
}
