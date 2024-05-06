import { Injectable } from '@nestjs/common';

@Injectable()
export class FlightBookingsService {
  getHello(): string {
    return 'Hello World!';
  }
}
