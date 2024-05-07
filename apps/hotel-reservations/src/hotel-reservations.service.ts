import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { BILLING_SERVICE } from './constants/service';
import { HotelReservationsRepository } from './schemas/hotel-reservations.repository';
import { CreateHotelReservationsRequest } from './dto/create-hotel-reservations.request';

@Injectable()
export class HotelReservationsService {
  constructor(
    private readonly hotelReservationsRepository: HotelReservationsRepository,
    @Inject(BILLING_SERVICE) private billingClient: ClientProxy,
  ) {}
  async createHotelReservationss(
    request: CreateHotelReservationsRequest,
    authentication: string,
  ) {
    const session = await this.hotelReservationsRepository.startTransaction();
    try {
      const order = await this.hotelReservationsRepository.create(request, {
        session,
      });
      await lastValueFrom(
        this.billingClient.emit('hotel_reservation_created', {
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

  async getHotelReservations() {
    return this.hotelReservationsRepository.find({});
  }
}
