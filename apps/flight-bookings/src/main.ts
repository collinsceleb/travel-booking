import { NestFactory } from '@nestjs/core';
import { FlightBookingsModule } from './flight-bookings.module';

async function bootstrap() {
  const app = await NestFactory.create(FlightBookingsModule);
  await app.listen(3000);
}
bootstrap();
