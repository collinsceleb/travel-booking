import { Module } from '@nestjs/common';
import { FlightBookingsController } from './flight-bookings.controller';
import { FlightBookingsService } from './flight-bookings.service';

@Module({
  imports: [],
  controllers: [FlightBookingsController],
  providers: [FlightBookingsService],
})
export class FlightBookingsModule {}
