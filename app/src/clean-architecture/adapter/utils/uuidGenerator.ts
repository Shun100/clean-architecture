import { v4 as uuidV4 } from 'uuid';
import { IdGeneratorInterface } from '../../domain/utils/idGeneratorInterface';

export class UuidGenerator implements IdGeneratorInterface {
  generate(): string {
      return uuidV4();
  }
}