export interface FindBookResponseDto {
  readonly id: string | null;
  readonly title: string | null;
  readonly isAvailable: boolean | null;
  readonly createdAt: Date | null;
  readonly updatedAt: Date | null;
}