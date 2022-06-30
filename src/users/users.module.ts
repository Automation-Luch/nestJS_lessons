import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UsersSchema } from './schema/user-registration.schema'

@Module({
	providers: [UsersService],
	exports: [UsersService],
	imports: [
		MongooseModule.forFeature([{ name: User.name, schema: UsersSchema }]),
	],
})
export class UsersModule {}
