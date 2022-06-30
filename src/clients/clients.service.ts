import { Injectable, NotFoundException } from '@nestjs/common'

// This should be a real class/interface representing a user entity

import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Client, ClientDocument } from './schema/client-profile.schema'

@Injectable()
export class ClientsService {
	constructor(
		@InjectModel(Client.name) public userModel: Model<ClientDocument>
	) {}

	async findOne(email: string): Promise<Client | undefined> {
		try {
			const user = await this.userModel.findOne({ email })
			return user
		} catch (error) {
			throw new NotFoundException()
		}
	}
}
