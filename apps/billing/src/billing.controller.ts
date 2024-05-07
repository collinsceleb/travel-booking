/* eslint-disable prettier/prettier */
import { Controller, Get, UseGuards } from '@nestjs/common';
import { BillingService } from './billing.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { JwtAuthGuard, RmqService } from '@app/common';

@Controller()
export class BillingController {
  constructor(
    private readonly billingService: BillingService,
    private readonly rmqService: RmqService,
  ) {}

  @Get()
  getHello(): string {
    return this.billingService.getHello();
  }

  @EventPattern('flight_booking_created')
  @UseGuards(JwtAuthGuard)
  async handleFlightBookingCreated(
    @Payload() data: any,
    @Ctx() context: RmqContext,
  ) {
    this.billingService.bill(data);
    this.rmqService.ack(context);
  }
  
  @EventPattern('hotel_reservation_created')
  @UseGuards(JwtAuthGuard)
  async handleHotelReservationCreated(
    @Payload() data: any,
    @Ctx() context: RmqContext,
  ) {
    this.billingService.bill(data);
    this.rmqService.ack(context);
  }
}
