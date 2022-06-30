import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { , IsNotEmpty } from 'class-validator'

export type ClientDocument = Client & Document

@Schema()
export class Client {
    @
    avatar:File
}
export const ClientSchema = SchemaFactory.createForClass(Client)
