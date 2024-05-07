import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { FlightBookingsService } from './flight-bookings.service';
import { CreateFlightBookingsRequest } from './dto/create-flight-bookings.request';
import { JwtAuthGuard } from '@app/common';

@Controller('flight-bookings')
export class FlightBookingsController {
  constructor(private readonly flightBookingsService: FlightBookingsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createFlightBookings(
    @Body() request: CreateFlightBookingsRequest,
    @Req() req: any,
  ) {
    return this.flightBookingsService.createFlightBookings(
      request,
      req.cookies?.Authentication,
    );
  }

  @Get()
  async getFlightBookings() {
    return this.flightBookingsService.getFlightBookings();
  }
}
