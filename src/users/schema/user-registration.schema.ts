import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { IsEmail, IsNotEmpty } from 'class-validator'

export type UserDocument = User & Document

@Schema()
export class User {
	@IsEmail()
	@Prop({ unique: true })
	email: string

	@IsNotEmpty()
	@Prop({
		minlength: 6,
		maxlength: 20,
		match: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
	})
	password: string
}
export const UsersSchema = SchemaFactory.createForClass(User)
