import { v4 as uuidV4 } from 'uuid';
import { IdGeneratorInterface } from './idGeneratorInterface';

export class UuidGenerator implements IdGeneratorInterface {
  generate(): string {
      return uuidV4();
  }
}