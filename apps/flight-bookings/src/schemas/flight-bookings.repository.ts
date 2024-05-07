/* eslint-disable prettier/prettier */
import { AbstractRepository } from '@app/common';
import { FlightBookings } from './flight-bookings.schema';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class FlightBookingsRepository extends AbstractRepository<FlightBookings> {
  protected readonly logger: Logger = new Logger(FlightBookingsRepository.name);

  constructor(
    @InjectModel(FlightBookings.name) flightBookingsModel: Model<FlightBookings>,
    @InjectConnection() connection: Connection
  ) {
    super(flightBookingsModel, connection)
  }
}