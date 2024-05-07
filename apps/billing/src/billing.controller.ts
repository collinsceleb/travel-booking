/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { BillingService } from './billing.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get()
  getHello(): string {
    return this.billingService.getHello();
  }

  @EventPattern('flight_booking_created')
  async handleFlightBookingCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    this.billingService.bill(data)
  }
}
