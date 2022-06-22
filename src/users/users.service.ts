import { Injectable, NotFoundException } from '@nestjs/common';

// This should be a real class/interface representing a user entity

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './user.dto';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) public userModel: Model<UserDocument>) {}

  async findOne(email: string): Promise<User | undefined> {
    try {
      const user = await this.userModel.findOne({ email });
      return user;
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
