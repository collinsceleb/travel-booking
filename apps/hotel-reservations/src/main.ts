import { NestFactory } from '@nestjs/core';
import { HotelReservationsModule } from './hotel-reservations.module';

async function bootstrap() {
  const app = await NestFactory.create(HotelReservationsModule);
  await app.listen(3000);
}
bootstrap();
