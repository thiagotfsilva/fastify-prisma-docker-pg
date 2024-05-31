export class CreateTicketDto {
  readonly userId: string;
  readonly categoryId: string;
  readonly eventId: string;
  readonly paymentId: string;
  readonly status: string;
  readonly day: number;
}
