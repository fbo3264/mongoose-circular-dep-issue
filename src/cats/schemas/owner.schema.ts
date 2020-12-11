import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from "mongoose";
import {Cat} from "./cat.schema";

export type OwnerDocument = Owner & Document;

@Schema()
export class Owner {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    breed: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Cat.name }] })
    cats: Cat[];
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
