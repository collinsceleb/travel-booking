import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { HotelReservationsService } from './hotel-reservations.service';
import { JwtAuthGuard } from '@app/common';
import { CreateHotelReservationsRequest } from './dto/create-hotel-reservations.request';

@Controller('hotel-reservations')
export class HotelReservationsController {
  constructor(
    private readonly hotelReservationsService: HotelReservationsService,
  ) {}

  @Post()
  async createHotelResrvations(
    @Body() request: CreateHotelReservationsRequest,
    @Req() req: any,
  ) {
    return this.hotelReservationsService.createHotelReservationss(
      request,
      req.cookies?.Authentication,
    );
  }

  @Get()
  async getHotelReservations() {
    return this.hotelReservationsService.getHotelReservations();
  }
}
