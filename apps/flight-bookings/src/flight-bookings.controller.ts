import { Controller, Get } from '@nestjs/common';
import { FlightBookingsService } from './flight-bookings.service';

@Controller()
export class FlightBookingsController {
  constructor(private readonly flightBookingsService: FlightBookingsService) {}

  @Get()
  getHello(): string {
    return this.flightBookingsService.getHello();
  }
}
