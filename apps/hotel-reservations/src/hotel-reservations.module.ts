import { Module } from '@nestjs/common';
import { HotelReservationsController } from './hotel-reservations.controller';
import { HotelReservationsService } from './hotel-reservations.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule, RmqModule, AuthModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BILLING_SERVICE } from './constants/service';
import {
  HotelReservations,
  HotelReservationsSchema,
} from './schemas/hotel-reservations.schema';
import { HotelReservationsRepository } from './schemas/hotel-reservations.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/hotel-reservations/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([
      { name: HotelReservations.name, schema: HotelReservationsSchema },
    ]),
    RmqModule.register({
      name: BILLING_SERVICE,
    }),
    AuthModule,
  ],
  controllers: [HotelReservationsController],
  providers: [HotelReservationsService, HotelReservationsRepository],
})
export class HotelReservationsModule {}
