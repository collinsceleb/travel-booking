/* eslint-disable prettier/prettier */
import { IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
export class CreateFlightBookingsRequest {
  @IsString()
  @IsNotEmpty()
  tripType: string;

  @IsString()
  @IsNotEmpty()
  passengerType: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  numberOfPassenger: number;

  @IsNotEmpty()
  @IsString()
  flightClass: string;

  @IsString()
  @IsNotEmpty()
  departureDate: string;

  @IsString()
  @IsNotEmpty()
  source: string;

  @IsPositive()
  cost: number;

  @IsString()
  @IsNotEmpty()
  destination: string;

  @IsString()
  arrivalDate: string;

  @IsBoolean()
  isAdult: boolean;

  @IsBoolean()
  isChildren: boolean;

  @IsBoolean()
  isInfant: boolean;

  @IsBoolean()
  isOneWay: boolean;

  @IsBoolean()
  isRoundTrip: boolean;

  @IsBoolean()
  isMultiCity: boolean;
}
