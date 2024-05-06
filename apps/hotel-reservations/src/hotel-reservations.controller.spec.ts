import { Test, TestingModule } from '@nestjs/testing';
import { HotelReservationsController } from './hotel-reservations.controller';
import { HotelReservationsService } from './hotel-reservations.service';

describe('HotelReservationsController', () => {
  let hotelReservationsController: HotelReservationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HotelReservationsController],
      providers: [HotelReservationsService],
    }).compile();

    hotelReservationsController = app.get<HotelReservationsController>(HotelReservationsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(hotelReservationsController.getHello()).toBe('Hello World!');
    });
  });
});
