/* eslint-disable prettier/prettier */
import { AbstractDocument } from '@app/common';
import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class FlightBookings extends AbstractDocument {
  @Prop({ type: String })
  source: string;

  @Prop({ type: String })
  destination: string;

  @Prop({ type: String })
  arrivalDate: string;

  @Prop({ type: String })
  departureDate: string;

  @Prop({ type: Number })
  numberOfPassenger: number;

  @Prop({ type: Number})
  cost: number

  @Prop({
    type: String,
    enum: ['One way', 'Round Trip', 'Multi-city'],
  })
  tripType: string;

  @Prop({
    type: String,
    enum: ['Adult', 'Children', 'Infant'],
  })
  passengerType: string;

  @Prop({
    type: String,
    enum: ['Economy', 'Premium Economy', 'Business', 'First Class'],
  })
  flightClass: string;

  @Prop({ type: Boolean })
  isAdult: boolean;

  @Prop({ type: Boolean })
  isChildren: boolean;

  @Prop({ type: Boolean })
  isInfant: boolean;

  @Prop({ type: Boolean })
  isOneWay: boolean;

  @Prop({ type: Boolean })
  isRoundTrip: boolean;

  @Prop({ type: Boolean })
  isMultiCity: boolean;
}

export const FlightBookingsSchema = SchemaFactory.createForClass(FlightBookings);