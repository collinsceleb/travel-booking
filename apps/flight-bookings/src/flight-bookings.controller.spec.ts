import { Test, TestingModule } from '@nestjs/testing';
import { FlightBookingsController } from './flight-bookings.controller';
import { FlightBookingsService } from './flight-bookings.service';

describe('FlightBookingsController', () => {
  let flightBookingsController: FlightBookingsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FlightBookingsController],
      providers: [FlightBookingsService],
    }).compile();

    flightBookingsController = app.get<FlightBookingsController>(FlightBookingsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(flightBookingsController.getHello()).toBe('Hello World!');
    });
  });
});
