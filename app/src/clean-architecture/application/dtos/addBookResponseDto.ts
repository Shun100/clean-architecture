export interface AddBookResponseDto {
  readonly id: string;
  readonly title: string;
  readonly isAvailable: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}