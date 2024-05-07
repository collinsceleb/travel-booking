/* eslint-disable prettier/prettier */
import { AbstractDocument } from '@app/common';
import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class HotelReservations extends AbstractDocument {

  @Prop({ type: Number})
  cost: number;

  @Prop({ type: String})
  destination: string;

  @Prop({ type: String})
  arrivalDate: string;

  @Prop({ type: String})
  departureDate: string;

  @Prop({type: Boolean})
  isAdult: boolean;

  @Prop({ type: Boolean})
  isChildren: boolean;

  @Prop({ type: String, enum:  ['Business', 'Leisure'],})
  travellingReason: string;

  @Prop({ type: Number})
  numberOfRoom: number;

  @Prop({type: Number})
  numberOfGuest: number;
}

export const HotelReservationsSchema = SchemaFactory.createForClass(HotelReservations);