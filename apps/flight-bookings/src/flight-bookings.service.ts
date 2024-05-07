import { Inject, Injectable } from '@nestjs/common';
import { CreateFlightBookingsRequest } from './dto/create-flight-bookings.request';
import { FlightBookingsRepository } from './schemas/flight-bookings.repository';
import { BILLING_SERVICE } from './constants/service';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class FlightBookingsService {
  constructor(
    private readonly flightBookingsRepository: FlightBookingsRepository,
    @Inject(BILLING_SERVICE) private billingClient: ClientProxy,
  ) {}
  async createFlightBookings(
    request: CreateFlightBookingsRequest,
    authentication: string,
  ) {
    const session = await this.flightBookingsRepository.startTransaction();
    try {
      const order = await this.flightBookingsRepository.create(request, {
        session,
      });
      await lastValueFrom(
        this.billingClient.emit('flight_booking_created', {
          request,
          Authentication: authentication,
        }),
      );
      await session.commitTransaction();
      return order;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    }
    // return this.flightBookingsRepository.create(request);
  }

  async getFlightBookings() {
    return this.flightBookingsRepository.find({});
  }
}
