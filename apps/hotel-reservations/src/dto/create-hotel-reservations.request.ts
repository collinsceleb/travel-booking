/* eslint-disable prettier/prettier */
import { IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
export class CreateHotelReservationsRequest {
  @IsPositive()
  cost: number;

  @IsString()
  @IsNotEmpty()
  destination: string;

  @IsString()
  arrivalDate: string;

  @IsString()
  departureDate: string;

  @IsBoolean()
  isAdult: boolean;

  @IsBoolean()
  isChildren: boolean;

  @IsString()
  travellingReason: string;

  @IsPositive()
  numberOfRoom: number;

  @IsPositive()
  numberOfGuest: number;
}
