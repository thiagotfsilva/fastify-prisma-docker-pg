export class CreateCategory {
  readonly price: number;
  readonly eventId: string;
  readonly name: string;
  readonly days: string;
}

export class CategoryResponse extends CreateCategory {
  readonly id: string;
}
