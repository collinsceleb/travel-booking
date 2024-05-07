/* eslint-disable prettier/prettier */
import { AbstractRepository } from '@app/common';
import { HotelReservations } from './hotel-reservations.schema';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class HotelReservationsRepository extends AbstractRepository<HotelReservations> {
  protected readonly logger: Logger = new Logger(
    HotelReservationsRepository.name,
  );

  constructor(
    @InjectModel(HotelReservations.name)
    hotelReservationsModel: Model<HotelReservations>,
    @InjectConnection() connection: Connection,
  ) {
    super(hotelReservationsModel, connection);
  }
}