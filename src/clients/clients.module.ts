import { Module } from '@nestjs/common'
import { ClientsService } from './clients.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Client, ClientSchema } from './schema/client-profile.schema'

@Module({
	providers: [ClientsService],
	exports: [ClientsService],
	imports: [
		MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
	],
})
export class ClientsModule {}
