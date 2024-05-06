import { Injectable } from '@nestjs/common';

@Injectable()
export class HotelReservationsService {
  getHello(): string {
    return 'Hello World!';
  }
}
