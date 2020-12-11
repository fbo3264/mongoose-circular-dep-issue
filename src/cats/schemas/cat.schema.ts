import {Prop, raw, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import {Owner} from "./owner.schema";

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    breed: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Owner.name }] })
    product: Owner[];
}

export const CatSchema = SchemaFactory.createForClass(Cat);
