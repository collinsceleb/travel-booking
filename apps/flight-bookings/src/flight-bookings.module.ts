import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { FlightBookingsController } from './flight-bookings.controller';
import { FlightBookingsService } from './flight-bookings.service';
import { DatabaseModule, RmqModule } from '@app/common';
import { FlightBookingsRepository } from './schemas/flight-bookings.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FlightBookings,
  FlightBookingsSchema,
} from './schemas/flight-bookings.schema';
import { BILLING_SERVICE } from './constants/service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/flight-bookings/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([
      { name: FlightBookings.name, schema: FlightBookingsSchema },
    ]),
    RmqModule.register({
      name: BILLING_SERVICE,
    }),
  ],
  controllers: [FlightBookingsController],
  providers: [FlightBookingsService, FlightBookingsRepository],
})
export class FlightBookingsModule {}
