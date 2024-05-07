import { Body, Controller, Get, Post } from '@nestjs/common';
import { FlightBookingsService } from './flight-bookings.service';
import { CreateFlightBookingsRequest } from './dto/create-flight-bookings.request';

@Controller('flight-bookings')
export class FlightBookingsController {
  constructor(private readonly flightBookingsService: FlightBookingsService) {}

  @Post()
  async createFlightBookings(@Body() request: CreateFlightBookingsRequest) {
    return this.flightBookingsService.createFlightBookings(request);
  }

  @Get()
  async getFlightBookings() {
    return this.flightBookingsService.getFlightBookings();
  }
}
