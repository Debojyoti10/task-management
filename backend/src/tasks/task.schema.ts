import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ enum: ['pending', 'in-progress', 'completed'], default: 'pending' })
  status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
